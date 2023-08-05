module	aximm2s #(
		parameter	C_AXI_ADDR_WIDTH = 32,
		              parameter	C_AXI_DATA_WIDTH = 32,
		// We support five 32-bit AXI-lite registers, requiring 5-bits
		// of AXI-lite addressing
		localparam	C_AXIL_ADDR_WIDTH = 5,
		localparam	C_AXIL_DATA_WIDTH = 32,
		//
		// The bottom ADDRLSB bits of any AXI address are subword bits
		localparam	ADDRLSB = $clog2(C_AXI_DATA_WIDTH)-3,
		localparam	AXILLSB = $clog2(C_AXIL_DATA_WIDTH)-3,
		//
		// ABORT_KEY is the value that, when written to the top 8-bits
		// of the control word, will abort any ongoing operation.
		parameter [7:0]	ABORT_KEY = 8'h6d,
		//
		// The size of the FIFO
		parameter	LGFIFO = 9,
		//
		// Maximum number of bytes that can ever be transferred, in
		// log-base 2
		parameter	LGLEN  = 20,
		              // OPT_UNALIGNED: Allow unaligned accesses, address requests
		              // and sizes which may or may not match the underlying data
		              // width.  If set, the core will quietly align these requests.
		              parameter [0:0]	OPT_UNALIGNED = 1'b0,
		//
		// AXI_ID is the ID we will use for all of our AXI transactions
		parameter	AXI_ID = 0
		// }}}
	) (
		// {{{
		input	wire					S_AXI_ACLK,
		input	wire					S_AXI_ARESETN,
		//
		// The control interface
		// {{{
		input	wire					S_AXIL_AWVALID,
		output	wire					S_AXIL_AWREADY,
		input	wire	[C_AXIL_ADDR_WIDTH-1:0]		S_AXIL_AWADDR,
		input	wire	[2:0]				S_AXIL_AWPROT,
		//
		input	wire					S_AXIL_WVALID,
		output	wire					S_AXIL_WREADY,
		input	wire	[C_AXIL_DATA_WIDTH-1:0]		S_AXIL_WDATA,
		input	wire	[C_AXIL_DATA_WIDTH/8-1:0]	S_AXIL_WSTRB,
		//
		output	wire					S_AXIL_BVALID,
		input	wire					S_AXIL_BREADY,
		output	wire	[1:0]				S_AXIL_BRESP,
		//
		input	wire					S_AXIL_ARVALID,
		output	wire					S_AXIL_ARREADY,
		input	wire	[C_AXIL_ADDR_WIDTH-1:0]		S_AXIL_ARADDR,
		input	wire	[2:0]				S_AXIL_ARPROT,
		//
		output	wire					S_AXIL_RVALID,
		input	wire					S_AXIL_RREADY,
		output	wire	[C_AXIL_DATA_WIDTH-1:0]		S_AXIL_RDATA,
		output	wire	[1:0]				S_AXIL_RRESP
		// }}}
		//
	);
	// Local parameter declarations
	// {{{
	localparam [2:0]	CMD_CONTROL   = 3'b000,
				CMD_UNUSED_1  = 3'b001,
				CMD_ADDRLO    = 3'b010,
				CMD_ADDRHI    = 3'b011,
				CMD_UNUSED_2  = 3'b100,
				CMD_UNUSED_3  = 3'b101,
				CMD_LENLO     = 3'b110,
				CMD_LENHI     = 3'b111;
	localparam		CBIT_BUSY	= 31,
				CBIT_ERR	= 30,
				CBIT_COMPLETE	= 29,
				CBIT_CONTINUOUS	= 28,
				CBIT_INCREMENT	= 27;
	localparam	LGMAXBURST=(LGFIFO > 8) ? 8 : LGFIFO-1;
	localparam	LGMAX_FIXED_BURST = 4,
			MAX_FIXED_BURST = 16;
	localparam	LGLENW  = LGLEN  - ($clog2(C_AXI_DATA_WIDTH)-3),
			LGLENWA = LGLENW + (OPT_UNALIGNED ? 1:0);
	localparam	LGFIFOB = LGFIFO + ($clog2(C_AXI_DATA_WIDTH)-3);
	localparam [ADDRLSB-1:0] LSBZEROS = 0;
	// }}}

	wire	i_clk   =  S_AXI_ACLK;
	wire	i_reset = !S_AXI_ARESETN;

	// Signal declarations
	// {{{
	reg	r_busy, r_err, r_complete, r_continuous, r_increment,
		cmd_abort, zero_length,
		w_cmd_start, w_complete, w_cmd_abort;
	// reg	cmd_start;
	reg				axi_abort_pending;

	reg	[LGLENWA-1:0]		ar_requests_remaining,
					ar_bursts_outstanding;
	reg	[LGMAXBURST:0]		r_max_burst;
	reg	[C_AXI_ADDR_WIDTH-1:0]	axi_raddr;

	reg	[C_AXI_ADDR_WIDTH-1:0]	cmd_addr;
	reg	[LGLENW-1:0]		cmd_length_w;
	reg	[LGLENWA-1:0]		cmd_length_aligned_w;
	reg				unaligned_cmd_addr;

	// FIFO signals
	wire				reset_fifo, write_to_fifo,
					read_from_fifo;
	wire	[C_AXI_DATA_WIDTH-1:0]	write_data;
	wire	[LGFIFO:0]		fifo_fill;
	wire				fifo_full, fifo_empty;

	wire				awskd_valid, axil_write_ready;
	wire	[C_AXIL_ADDR_WIDTH-AXILLSB-1:0]	awskd_addr;
	//
	wire				wskd_valid;
	wire	[C_AXIL_DATA_WIDTH-1:0]	wskd_data;
	wire [C_AXIL_DATA_WIDTH/8-1:0]	wskd_strb;
	reg				axil_bvalid;
	//
	wire				arskd_valid, axil_read_ready;
	wire	[C_AXIL_ADDR_WIDTH-AXILLSB-1:0]	arskd_addr;
	reg	[C_AXIL_DATA_WIDTH-1:0]	axil_read_data;
	reg				axil_read_valid;
	reg	[C_AXIL_DATA_WIDTH-1:0]	w_status_word;
	reg	[2*C_AXIL_DATA_WIDTH-1:0]	wide_address, wide_length,
					new_wideaddr, new_widelen;
	wire	[C_AXIL_DATA_WIDTH-1:0]	new_cmdaddrlo, new_cmdaddrhi,
					new_lengthlo, new_lengthhi;



	reg				axi_arvalid;
	reg	[C_AXI_ADDR_WIDTH-1:0]	axi_araddr;
	reg	[7:0]			axi_arlen;
	reg	[1:0]			axi_arburst;

	// Speed up checking for zeros
	reg				ar_none_remaining,
					ar_none_outstanding,
					phantom_start, start_burst;
	reg				partial_burst_requested;
	reg	[LGMAXBURST-1:0]	addralign;
	reg	[LGFIFO:0]		rd_uncommitted;
	reg				w_increment;
	reg	[LGMAXBURST:0]		initial_burstlen;
	reg	[LGLENWA-1:0]		rd_reads_remaining;
	reg				rd_none_remaining,
					rd_last_remaining;

	wire				realign_last_valid;
/*
					wr_none_pending, r_none_remaining;

	reg				w_phantom_start, phantom_start;
	reg	[LGFIFO:0]	next_fill;
*/

	// }}}

	////////////////////////////////////////////////////////////////////////
	//
	// AXI-lite signaling
	//
	////////////////////////////////////////////////////////////////////////
	//
	// This is mostly the skidbuffer logic, and handling of the VALID
	// and READY signals for the AXI-lite control logic in the next
	// section.
	// {{{

	//
	// Write signaling
	//
	// {{{

	skidbuffer #(.OPT_OUTREG(0), .DW(C_AXIL_ADDR_WIDTH-AXILLSB))
	axilawskid(//
		.i_clk(S_AXI_ACLK), .i_reset(i_reset),
		.i_valid(S_AXIL_AWVALID), .o_ready(S_AXIL_AWREADY),
		.i_data(S_AXIL_AWADDR[C_AXIL_ADDR_WIDTH-1:AXILLSB]),
		.o_valid(awskd_valid), .i_ready(axil_write_ready),
		.o_data(awskd_addr));

	skidbuffer #(.OPT_OUTREG(0), .DW(C_AXIL_DATA_WIDTH+C_AXIL_DATA_WIDTH/8))
	axilwskid(//
		.i_clk(S_AXI_ACLK), .i_reset(i_reset),
		.i_valid(S_AXIL_WVALID), .o_ready(S_AXIL_WREADY),
		.i_data({ S_AXIL_WDATA, S_AXIL_WSTRB }),
		.o_valid(wskd_valid), .i_ready(axil_write_ready),
		.o_data({ wskd_data, wskd_strb }));

	assign	axil_write_ready = awskd_valid && wskd_valid
			&& (!S_AXIL_BVALID || S_AXIL_BREADY);

	initial	axil_bvalid = 0;
	always @(posedge i_clk)
	if (i_reset)
		axil_bvalid <= 0;
	else if (axil_write_ready)
		axil_bvalid <= 1;
	else if (S_AXIL_BREADY)
		axil_bvalid <= 0;

	assign	S_AXIL_BVALID = axil_bvalid;
	assign	S_AXIL_BRESP = 2'b00;
	// }}}

	//
	// Read signaling
	//
	// {{{

	skidbuffer #(.OPT_OUTREG(0), .DW(C_AXIL_ADDR_WIDTH-AXILLSB))
	axilarskid(//
		.i_clk(S_AXI_ACLK), .i_reset(i_reset),
		.i_valid(S_AXIL_ARVALID), .o_ready(S_AXIL_ARREADY),
		.i_data(S_AXIL_ARADDR[C_AXIL_ADDR_WIDTH-1:AXILLSB]),
		.o_valid(arskd_valid), .i_ready(axil_read_ready),
		.o_data(arskd_addr));

	assign	axil_read_ready = arskd_valid
				&& (!axil_read_valid || S_AXIL_RREADY);

	initial	axil_read_valid = 1'b0;
	always @(posedge i_clk)
	if (i_reset)
		axil_read_valid <= 1'b0;
	else if (axil_read_ready)
		axil_read_valid <= 1'b1;
	else if (S_AXIL_RREADY)
		axil_read_valid <= 1'b0;

	assign	S_AXIL_RVALID = axil_read_valid;
	assign	S_AXIL_RDATA  = axil_read_data;
	assign	S_AXIL_RRESP = 2'b00;
	// }}}

	// }}}
	////////////////////////////////////////////////////////////////////////
	//
	// AXI-lite controlled logic
	//
	////////////////////////////////////////////////////////////////////////
	//
	// {{{

	//
	// Abort transaction
	//
	always @(*)
	begin
		w_cmd_abort = 0;
		w_cmd_abort = (axil_write_ready && awskd_addr == CMD_CONTROL)
			&& (wskd_strb[3] && wskd_data[31:24] == ABORT_KEY);
		if (!r_busy)
			w_cmd_abort = 0;
	end

	initial	cmd_abort = 0;
	always @(posedge i_clk)
	if (i_reset)
		cmd_abort <= 0;
	else
		cmd_abort <= (cmd_abort && r_busy)||w_cmd_abort;

	//
	// Start command
	//
	always @(*)
	if (r_busy)
		w_cmd_start = 0;
	else begin
		w_cmd_start = 0;
		if ((axil_write_ready && awskd_addr == CMD_CONTROL)
			&& (wskd_strb[3] && wskd_data[CBIT_BUSY]))
			w_cmd_start = 1;
		if (r_err && !wskd_data[CBIT_ERR])
			w_cmd_start = 0;
		if (zero_length)
			w_cmd_start = 0;
		if (OPT_UNALIGNED && unaligned_cmd_addr
				&& wskd_data[CBIT_INCREMENT])
			w_cmd_start = 0;
	end

	//
	// Calculate busy or complete flags
	//
	initial	r_busy     = 0;
	initial	r_complete = 0;
	always @(posedge i_clk)
	if (i_reset)
	begin
		r_busy     <= 0;
		r_complete <= 0;
	end else if (!r_busy)
	begin
		if (w_cmd_start)
			r_busy <= 1'b1;
		if (axil_write_ready && awskd_addr == CMD_CONTROL)
			// Any write to the control register will clear the
			// completion flag
			r_complete <= 1'b0;
	end else if (r_busy)
	begin
		if (w_complete)
		begin
			r_complete <= 1;
			r_busy <= 1'b0;
		end
	end

	//
	// Error conditions
	//
	always @(posedge i_clk)
	if (i_reset)
		r_err <= 0;
	else if (!r_busy)
	begin
		if (axil_write_ready && awskd_addr == CMD_CONTROL)
		begin
			if (!w_cmd_abort)
				r_err <= r_err && (!wskd_strb[3] || !wskd_data[CBIT_ERR]);
			// On any request to start a transfer with an unaligned
			// address, that's not incrementing--declare an
			// immediate error
			if (wskd_strb[3] && wskd_data[CBIT_BUSY]
				&& wskd_data[CBIT_INCREMENT]
				&& (OPT_UNALIGNED && unaligned_cmd_addr))
				r_err <= 1'b1;
		end
	end else // if (r_busy)
	begin
		if (M_AXI_RVALID && M_AXI_RREADY && M_AXI_RRESP[1])
			r_err <= 1'b1;
	end

	initial	r_continuous = 0;
	always @(posedge i_clk)
	if (i_reset)
		r_continuous <= 0;
	else begin
		if (!r_busy && axil_write_ready && awskd_addr == CMD_CONTROL
			&& !w_cmd_abort)
			r_continuous <= wskd_strb[3] && wskd_data[CBIT_CONTINUOUS];
	end

	always @(*)
	begin
		wide_address = 0;
		wide_address[C_AXI_ADDR_WIDTH-1:0] = cmd_addr;
		if (!OPT_UNALIGNED)
			wide_address[ADDRLSB-1:0] = 0;

		wide_length  = 0;
		wide_length[ADDRLSB +: LGLENW] = cmd_length_w;
	end

	assign	new_cmdaddrlo = apply_wstrb(
			wide_address[C_AXIL_DATA_WIDTH-1:0],
			wskd_data, wskd_strb);

	assign	new_cmdaddrhi = apply_wstrb(
			wide_address[2*C_AXIL_DATA_WIDTH-1:C_AXIL_DATA_WIDTH],
			wskd_data, wskd_strb);

	assign	new_lengthlo = apply_wstrb(
			wide_length[C_AXIL_DATA_WIDTH-1:0],
			wskd_data, wskd_strb);

	assign	new_lengthhi = apply_wstrb(
			wide_length[2*C_AXIL_DATA_WIDTH-1:C_AXIL_DATA_WIDTH],
			wskd_data, wskd_strb);

	always @(*)
	begin
		new_wideaddr = wide_address;

		if (awskd_addr == CMD_ADDRLO)
			new_wideaddr[C_AXIL_DATA_WIDTH-1:0] = new_cmdaddrlo;
		if (awskd_addr == CMD_ADDRHI)
			new_wideaddr[2*C_AXIL_DATA_WIDTH-1:C_AXIL_DATA_WIDTH] = new_cmdaddrhi;
		if (!OPT_UNALIGNED)
			new_wideaddr[ADDRLSB-1:0] = 0;
		new_wideaddr[2*C_AXIL_DATA_WIDTH-1:C_AXI_ADDR_WIDTH] = 0;


		new_widelen = wide_length;
		if (awskd_addr == CMD_LENLO)
			new_widelen[C_AXIL_DATA_WIDTH-1:0] = new_lengthlo;
		if (awskd_addr == CMD_LENHI)
			new_widelen[2*C_AXIL_DATA_WIDTH-1:C_AXIL_DATA_WIDTH] = new_lengthhi;
		new_widelen[ADDRLSB-1:0] = 0;
		new_widelen[2*C_AXIL_DATA_WIDTH-1:ADDRLSB+LGLENW] = 0;
	end


	initial	r_increment   = 1'b1;
	initial	cmd_addr      = 0;
	initial	cmd_length_w  = 0;	// Counts in bytes
	initial	zero_length   = 1;
	initial	cmd_length_aligned_w = 0;
	initial	unaligned_cmd_addr = 1'b0;
	always @(posedge i_clk)
	if (i_reset)
	begin
		r_increment <= 1'b1;
		cmd_addr      <= 0;
		cmd_length_w  <= 0;
		cmd_length_aligned_w  <= 0;
		zero_length   <= 1;
		unaligned_cmd_addr <= 1'b0;
	end else if (axil_write_ready && !r_busy)
	begin
		case(awskd_addr)
		CMD_CONTROL:
			r_increment <= !wskd_data[CBIT_INCREMENT];
		CMD_ADDRLO: begin
			cmd_addr <= new_wideaddr[C_AXI_ADDR_WIDTH-1:0];
			unaligned_cmd_addr <= |new_wideaddr[ADDRLSB-1:0];
			if (!OPT_UNALIGNED)
				unaligned_cmd_addr <= 1'b0;
			else
				cmd_length_aligned_w <= cmd_length_w
					+ (|new_wideaddr[ADDRLSB-1:0] ? 1:0);
			// ERR: What if !r_increment?  In that case, we can't
			//   support unaligned addressing
			end
		CMD_ADDRHI: if (C_AXI_ADDR_WIDTH > C_AXIL_DATA_WIDTH)
			begin
			cmd_addr <= new_wideaddr[C_AXI_ADDR_WIDTH-1:0];
			end
		CMD_LENLO: begin
			cmd_length_w <= new_widelen[ADDRLSB +: LGLENW];
			zero_length <= (new_widelen[ADDRLSB +: LGLENW] == 0);
			cmd_length_aligned_w <= new_widelen[ADDRLSB +: LGLENW]
				+ (unaligned_cmd_addr ? 1:0);
			end
		CMD_LENHI: begin
			cmd_length_w <= new_widelen[ADDRLSB +: LGLENW];
			zero_length <= (new_widelen[ADDRLSB +: LGLENW] == 0);
			cmd_length_aligned_w <= new_widelen[ADDRLSB +: LGLENW]
				+ (unaligned_cmd_addr ? 1:0);
			end
		default: begin end
		endcase
	end else if(r_busy && r_continuous && !axi_abort_pending && r_increment)
		cmd_addr <= axi_raddr
			+ ((M_AXI_RVALID && !M_AXI_RRESP[1]
				&& (!unaligned_cmd_addr || realign_last_valid))
				? (1<<ADDRLSB) : 0);

	always @(*)
	begin
		w_status_word = 0;
		w_status_word[CBIT_BUSY]	= r_busy;
		w_status_word[CBIT_ERR]		= r_err;
		w_status_word[CBIT_COMPLETE]	= r_complete;
		w_status_word[CBIT_CONTINUOUS]	= r_continuous;
		w_status_word[CBIT_INCREMENT]	= !r_increment;
		w_status_word[20:16] = LGFIFO;
	end

	always @(posedge i_clk)
	if (!axil_read_valid || S_AXIL_RREADY)
	begin
		axil_read_data <= 0;
		case(arskd_addr)
		CMD_CONTROL:	axil_read_data <= w_status_word;
		CMD_ADDRLO:	axil_read_data <= wide_address[C_AXIL_DATA_WIDTH-1:0];
		CMD_ADDRHI:	axil_read_data <= wide_address[2*C_AXIL_DATA_WIDTH-1:C_AXIL_DATA_WIDTH];
		CMD_LENLO:	axil_read_data <= wide_length[C_AXIL_DATA_WIDTH-1:0];
		CMD_LENHI:	axil_read_data <= wide_length[2*C_AXIL_DATA_WIDTH-1:C_AXIL_DATA_WIDTH];
		default		axil_read_data <= 0;
		endcase
	end

	function [C_AXIL_DATA_WIDTH-1:0]	apply_wstrb;
		input	[C_AXIL_DATA_WIDTH-1:0]		prior_data;
		input	[C_AXIL_DATA_WIDTH-1:0]		new_data;
		input	[C_AXIL_DATA_WIDTH/8-1:0]	wstrb;

		integer	k;
		for(k=0; k<C_AXIL_DATA_WIDTH/8; k=k+1)
		begin
			apply_wstrb[k*8 +: 8]
				= wstrb[k] ? new_data[k*8 +: 8] : prior_data[k*8 +: 8];
		end
	endfunction

endmodule
`ifndef	YOSYS
`default_nettype wire
`endif
