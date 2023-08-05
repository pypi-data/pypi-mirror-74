module	aximm2s #(
		// {{{
		parameter	C_AXI_ADDR_WIDTH = 32,
		parameter	C_AXI_DATA_WIDTH = 32,
		parameter	C_AXI_ID_WIDTH = 1,
		// OPT_UNALIGNED: Allow unaligned accesses, address requests
		// and sizes which may or may not match the underlying data
		// width.  If set, the core will quietly align these requests.
		parameter [0:0]	OPT_UNALIGNED = 1'b0,
		//
		// OPT_TKEEP [Future]: If set, will also add TKEEP signals to
		// the outgoing slave interface.  This is necessary if ever you
		// wish to output partial stream words, such as might happen if
		// the length were ever something other than a full number of
		// words.  (Not yet implemented)
		// parameter [0:0]	OPT_TKEEP = 1'b0,
		//
		// OPT_TLAST: If enabled, will embed TLAST=1 at the end of every
		// commanded burst.  If  disabled, TLAST will be set to a
		// constant 1'b1.
		parameter [0:0]	OPT_TLAST = 1'b0,
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
		//
		// AXI_ID is the ID we will use for all of our AXI transactions
		parameter	AXI_ID = 0
		// }}}
	) (
		// {{{
		input	wire					S_AXI_ACLK,
		input	wire					S_AXI_ARESETN,
		//
		// The stream interface
		// {{{
		output	wire					S_AXIS_TVALID,
		input	wire					S_AXIS_TREADY,
		output	wire	[C_AXI_DATA_WIDTH-1:0]		S_AXIS_TDATA,
		output	wire					S_AXIS_TLAST,
		// }}}
		//
		// The AXI (full) read interface
		// {{{
		output	wire				M_AXI_ARVALID,
		input	wire				M_AXI_ARREADY,
		output	wire	[C_AXI_ID_WIDTH-1:0]	M_AXI_ARID,
		output	wire	[C_AXI_ADDR_WIDTH-1:0]	M_AXI_ARADDR,
		output	wire	[7:0]			M_AXI_ARLEN,
		output	wire	[2:0]			M_AXI_ARSIZE,
		output	wire	[1:0]			M_AXI_ARBURST,
		output	wire				M_AXI_ARLOCK,
		output	wire	[3:0]			M_AXI_ARCACHE,
		output	wire	[2:0]			M_AXI_ARPROT,
		output	wire	[3:0]			M_AXI_ARQOS,
		//
		input	wire				M_AXI_RVALID,
		output	wire				M_AXI_RREADY,
		input	wire	[C_AXI_DATA_WIDTH-1:0]	M_AXI_RDATA,
		input	wire				M_AXI_RLAST,
		input	wire	[C_AXI_ID_WIDTH-1:0]	M_AXI_RID,
		input	wire	[1:0]			M_AXI_RRESP,
		// }}}
		//
		//
		// Create an output signal to indicate that we've finished
		output	reg				o_int
		// }}}
	);

	// }}}
	////////////////////////////////////////////////////////////////////////
	//
	// The data FIFO section
	//
	////////////////////////////////////////////////////////////////////////
	//
	// {{{
	assign	reset_fifo = i_reset || (!r_busy && (!r_continuous || r_err));

	// Realign the data (if OPT_UNALIGN) before sending it to the FIFO
	// {{{
	// This allows us to handle unaligned addresses.
	generate if (OPT_UNALIGNED)
	begin : REALIGN_DATA

		reg				r_write_to_fifo;
		reg	[C_AXI_DATA_WIDTH-1:0]	last_data,
						r_write_data;
		reg	[ADDRLSB-1:0]		corollary_shift;
		reg				last_valid;
		reg	[ADDRLSB-1:0]		realignment;

		always @(*)
			realignment = cmd_addr[ADDRLSB-1:0];

		initial	last_data = 0;
		always @(posedge S_AXI_ACLK)
		if (reset_fifo || !unaligned_cmd_addr)
			last_data <= 0;
		else if (M_AXI_RVALID && M_AXI_RREADY)
			last_data <= M_AXI_RDATA >> (realignment * 8);

		initial	last_valid = 1'b0;
		always @(posedge S_AXI_ACLK)
		if (reset_fifo)
			last_valid <= 0;
		else if (M_AXI_RVALID && M_AXI_RREADY)
			last_valid <= 1'b1;
		else if (!r_busy)
			last_valid <= 1'b0;

		assign	realign_last_valid = last_valid;

		always @(*)
			corollary_shift = -realignment*8;

		always @(posedge S_AXI_ACLK)
		if (M_AXI_RVALID && M_AXI_RREADY)
			r_write_data <= (M_AXI_RDATA << corollary_shift)
					| last_data;
		else if (!fifo_full)
			r_write_data <= last_data;

		initial	r_write_to_fifo = 1'b0;
		always @(posedge S_AXI_ACLK)
		if (reset_fifo)
			r_write_to_fifo <= 1'b0;
		else if (M_AXI_RVALID && M_AXI_RREADY)
			r_write_to_fifo <= last_valid || !unaligned_cmd_addr;
		else if (!fifo_full)
			r_write_to_fifo <= 1'b0;

		assign	write_to_fifo = r_write_to_fifo;
		assign	write_data = r_write_data;

	end else begin : ALIGNED_DATA

		assign	write_to_fifo  = M_AXI_RVALID && M_AXI_RREADY;
		assign	write_data = M_AXI_RDATA;
		assign	realign_last_valid = 0;

	end endgenerate
	// }}}

	assign	read_from_fifo = S_AXIS_TVALID && S_AXIS_TREADY;
	assign	S_AXIS_TVALID  = !fifo_empty;

	// Write the results to the FIFO
	// {{{
	generate if (OPT_TLAST)
	begin : FIFO_W_TLAST
		// FIFO section--used if we have to add a TLAST signal to the
		// data stream
		// {{{
		reg	pre_tlast;
		wire	tlast;

		// tlast will be set on the last data word of any commanded
		// burst.

		// Appropriately, pre_tlast = (something) && M_AXI_RVALID
		//			&& M_AXI_RREADY && M_AXI_RLAST
		// We can simplify this greatly, since any time M_AXI_RVALID is
		// true, we also know that M_AXI_RREADY will be true.  This
		// allows us to get rid of the RREADY condition.  Next, we can
		// simplify the RVALID condition since we'll never write to the
		// FIFO if RVALID isn't also true.  Finally, we can get rid of
		// M_AXI_RLAST since this is captured by rd_last_remaining.
		always @(*)
			pre_tlast = rd_last_remaining;

		if (OPT_UNALIGNED)
		begin
			reg	r_tlast;

			// REALIGN delays the data by one clock period.  We'll
			// also need to delay the last as well.
			// Note that no one cares what tlast is if write_to_fifo
			// is zero, allowing us to massively simplify this.
			always @(posedge i_clk)
				r_tlast <= pre_tlast;

			assign	tlast = r_tlast;

		end else begin

			assign	tlast = pre_tlast;
		end


		sfifo #(.BW(C_AXI_DATA_WIDTH+1), .LGFLEN(LGFIFO))
		sfifo(i_clk, reset_fifo,
			write_to_fifo, { tlast, write_data }, fifo_full, fifo_fill,
			read_from_fifo, { S_AXIS_TLAST, S_AXIS_TDATA }, fifo_empty);
		// }}}
	end else begin : NO_TLAST_FIFO

		// FIFO section, where TLAST is held at 1'b1
		// {{{
		sfifo #(.BW(C_AXI_DATA_WIDTH), .LGFLEN(LGFIFO))
		sfifo(i_clk, reset_fifo,
			write_to_fifo, write_data, fifo_full, fifo_fill,
			read_from_fifo, S_AXIS_TDATA, fifo_empty);

		assign	S_AXIS_TLAST = 1'b1;
		// }}}
	end endgenerate
	// }}}



	// }}}
	////////////////////////////////////////////////////////////////////////
	//
	// The incoming AXI (full) protocol section
	//
	////////////////////////////////////////////////////////////////////////
	//
	//
	// {{{

	// Some counters to keep track of our state
	// {{{


	// Count the number of word writes left to be requested, starting
	// with the overall command length and then reduced by M_AWLEN on
	// each address write
	// {{{
	initial	ar_none_remaining = 1;
	initial	ar_requests_remaining = 0;
	always @(posedge i_clk)
	if (!r_busy)
	begin
		ar_requests_remaining <= cmd_length_aligned_w;
		ar_none_remaining     <= zero_length;
	end else if (cmd_abort || axi_abort_pending)
	begin
		ar_requests_remaining <= 0;
		ar_none_remaining <= 1;
	end else if (phantom_start)
	begin
		// Verilator lint_off WIDTH
		ar_requests_remaining
			<= ar_requests_remaining - (M_AXI_ARLEN + 1);
		ar_none_remaining <= (ar_requests_remaining == (M_AXI_ARLEN+1));
		// Verilator lint_on WIDTH
	end
	// }}}

	// Calculate the maximum possible burst length, ignoring 4kB boundaries
	// {{{
	always @(*)
		addralign = 1+(~cmd_addr[ADDRLSB +: LGMAXBURST]);
	always @(*)
		w_increment = !wskd_data[CBIT_INCREMENT];

	always @(*)
	begin
		initial_burstlen = (1<<LGMAXBURST);
		if (!w_increment)
		begin
			if (LGMAXBURST <= LGMAX_FIXED_BURST)
				initial_burstlen = (1<<LGMAXBURST);
			else
				initial_burstlen = MAX_FIXED_BURST;
			if (cmd_length_aligned_w < { {(LGLENWA-LGMAXBURST-1){1'b0}},
						initial_burstlen })
				initial_burstlen = cmd_length_aligned_w[LGMAXBURST:0];
		end else if (cmd_length_aligned_w >= (1<<LGMAXBURST))
		begin
			if (|cmd_addr[ADDRLSB +: LGMAXBURST])
				initial_burstlen = { 1'b0, addralign };
		end else begin
			initial_burstlen = cmd_length_aligned_w[LGMAXBURST:0];
			if ((|cmd_addr[ADDRLSB +: LGMAXBURST])
				&&({{(LGLENW-LGMAXBURST){1'b0}}, addralign } < cmd_length_aligned_w))
				initial_burstlen = { 1'b0, addralign };
		end
	end

	initial	r_max_burst = 0;
	always @(posedge i_clk)
	if (!r_busy)
	begin
		// Force us to align ourself early
		//   That way we don't need to check for
		//   alignment (again) later
		r_max_burst <= initial_burstlen;
	end else if (phantom_start)
	begin
		// Verilator lint_off WIDTH
		if (r_increment || LGMAXBURST <= LGMAX_FIXED_BURST)
		begin : LIMIT_BY_LGMAXBURST
			if (ar_requests_remaining < (1<<LGMAXBURST) + (M_AXI_ARLEN+1))
				r_max_burst <= ar_requests_remaining[8:0] - (M_AXI_ARLEN+1);
			else
				r_max_burst <= (1<<LGMAXBURST);
		end else begin : LIMIT_BY_SIXTEEN
			if (ar_requests_remaining < MAX_FIXED_BURST + (M_AXI_ARLEN+1))
				r_max_burst <= ar_requests_remaining[8:0] - (M_AXI_ARLEN+1);
			else
				r_max_burst <= MAX_FIXED_BURST;
		end
		// Verilator lint_on WIDTH
	end
	// }}}

	// Count the number of bursts outstanding--these are the number of
	// AWVALIDs that have been accepted, but for which the BVALID has not
	// (yet) been returned.
	// {{{
	initial	ar_none_outstanding   = 1;
	initial	ar_bursts_outstanding = 0;
	always @(posedge i_clk)
	if (i_reset)
	begin
		ar_bursts_outstanding <= 0;
		ar_none_outstanding <= 1;
	end else case ({ phantom_start,
				M_AXI_RVALID && M_AXI_RREADY && M_AXI_RLAST })
	2'b01:	begin
			ar_bursts_outstanding <=  ar_bursts_outstanding - 1;
			ar_none_outstanding   <= (ar_bursts_outstanding == 1);
		end
	2'b10:	begin
		ar_bursts_outstanding <= ar_bursts_outstanding + 1;
		ar_none_outstanding <= 0;
		end
	default: begin end
	endcase
	// }}}

	// Are we there yet?
	// {{{
	initial	rd_reads_remaining = 0;
	initial	rd_none_remaining = 1;
	initial	rd_last_remaining = 0;
	always @(posedge  i_clk)
	if (!r_busy)
	begin
		rd_reads_remaining <= cmd_length_aligned_w;
		rd_last_remaining  <= (cmd_length_aligned_w == 1);
		rd_none_remaining  <= (cmd_length_aligned_w == 0);
	end else if (M_AXI_RVALID && M_AXI_RREADY)
	begin
		rd_reads_remaining <= rd_reads_remaining - 1;
		rd_last_remaining  <= (rd_reads_remaining == 2);
		rd_none_remaining  <= (rd_reads_remaining == 1);
	end

	always @(*)
	if (!r_busy)
		w_complete = 0;
	else if (axi_abort_pending && ar_none_outstanding && !M_AXI_ARVALID)
		w_complete = 1;
	else if (r_continuous)
		w_complete = (rd_none_remaining)||((rd_last_remaining) && M_AXI_RVALID && M_AXI_RREADY);
	else // if !r_continuous
		w_complete = (rd_none_remaining && fifo_empty);

	// }}}

	// Are we stopping early?  Aborting something ongoing?
	// {{{
	initial	axi_abort_pending = 0;
	always @(posedge i_clk)
	if (i_reset || !r_busy)
		axi_abort_pending <= 0;
	else begin
		if (M_AXI_RVALID && M_AXI_RREADY && M_AXI_RRESP[1])
			axi_abort_pending <= 1;
		if (cmd_abort)
			axi_abort_pending <= 1;
	end
	// }}}

	// Count the number of uncommited spaces in the FIFO
	// {{{
	generate if (OPT_UNALIGNED)
	begin
		initial	partial_burst_requested <= 1'b1;
		always @(posedge i_clk)
		if (!r_busy)
			partial_burst_requested <= !unaligned_cmd_addr;
		else if (phantom_start)
			partial_burst_requested <= 1'b1;
	end else begin

		always @(*)
			partial_burst_requested = 1'b1;
	end endgenerate

	initial	rd_uncommitted = (1<<LGFIFO);
	always @(posedge i_clk)
	if (reset_fifo)
	begin
		rd_uncommitted <= (1<<LGFIFO);
	end else case ({ phantom_start,
			S_AXIS_TVALID && S_AXIS_TREADY })
	2'b00: begin end
	2'b01: begin
		rd_uncommitted <= rd_uncommitted + 1;
		end
	2'b10: begin
		// Verilator lint_off WIDTH
		rd_uncommitted <= rd_uncommitted - (M_AXI_ARLEN + 1)
			+ (partial_burst_requested ? 0 :1);
		end
	2'b11: begin
		rd_uncommitted <= rd_uncommitted - (M_AXI_ARLEN)
			+ (partial_burst_requested ? 0 :1);
		// Verilator lint_on WIDTH
		end
	endcase
	// }}}

	// So that we can monitor where we are at, and perhaps restart it
	// later, keep track of the current address used by the R-channel
	// {{{

	initial	axi_raddr = 0;
	always @(posedge i_clk)
	begin
		if (!r_busy)
			axi_raddr <= cmd_addr;
		else if (axi_abort_pending || !r_increment)
			// Stop incrementing tthe address following an abort
			axi_raddr <= axi_raddr;
		else begin
			if (M_AXI_RVALID && M_AXI_RREADY && !M_AXI_RRESP[1]
				&& (!unaligned_cmd_addr || realign_last_valid))
				axi_raddr <= axi_raddr + (1<<ADDRLSB);
		end

		if (!OPT_UNALIGNED)
			axi_raddr[ADDRLSB-1:0] <= 0;
	end

	// }}}

	// Count the number of words remaining to be written on the W channel
	// {{{
	// }}}

	//
	// }}}

	always @(*)
	begin
		start_burst = !ar_none_remaining;
		if (rd_uncommitted< {{(LGFIFO-LGMAXBURST){1'b0}}, r_max_burst})
			start_burst = 0;
		if (phantom_start)
			// Insist on a minimum of one clock between burst
			// starts, so we can get our lengths right
			start_burst = 0;
		if (M_AXI_ARVALID && !M_AXI_ARREADY)
			start_burst = 0;
		if (!r_busy || cmd_abort || axi_abort_pending)
			start_burst  = 0;
	end

	initial	phantom_start = 0;
	always @(posedge i_clk)
	if (i_reset)
		phantom_start <= 0;
	else
		phantom_start <= start_burst;
	// }}}


	// Calculate ARLEN and ARADDR for the next ARVALID
	// {{{
	initial	axi_araddr = 0;
	always @(posedge i_clk)
	if (!M_AXI_ARVALID || M_AXI_ARREADY)
	begin
		if (!r_busy)
			axi_araddr <= cmd_addr;
		else if (M_AXI_ARVALID && r_increment)
		begin
			// Verilator lint_off WIDTH
			axi_araddr[C_AXI_ADDR_WIDTH-1:ADDRLSB]
				<= axi_araddr[C_AXI_ADDR_WIDTH-1:ADDRLSB]
					+ (M_AXI_ARLEN + 1);
			// Verilator lint_on  WIDTH
			axi_araddr[ADDRLSB-1:0] <= 0;
		end
		axi_arlen  <= r_max_burst[7:0] - 8'd1;

		if (!OPT_UNALIGNED)
			axi_araddr[ADDRLSB-1:0] <= 0;
	end
	// }}}

	// ARVALID
	// {{{
	initial	axi_arvalid = 0;
	always @(posedge i_clk)
	if (i_reset)
		axi_arvalid <= 0;
	else if (!M_AXI_ARVALID || M_AXI_ARREADY)
		axi_arvalid <= start_burst;
	// }}}

	always @(posedge i_clk)
	if (!r_busy)
		axi_arburst <= (w_increment) ? 2'b01 : 2'b00;

	// Set the constant M_AXI_* signals
	// {{{
	assign	M_AXI_ARVALID= axi_arvalid;
	assign	M_AXI_ARID   = AXI_ID;
	assign	M_AXI_ARADDR = axi_araddr;
	assign	M_AXI_ARLEN  = axi_arlen;
	// Verilator lint_off WIDTH
	assign	M_AXI_ARSIZE = $clog2(C_AXI_DATA_WIDTH)-3;
	// Verilator lint_on  WIDTH
	assign	M_AXI_ARBURST= axi_arburst;
	assign	M_AXI_ARLOCK = 0;
	assign	M_AXI_ARCACHE= 0;
	assign	M_AXI_ARPROT = 0;
	assign	M_AXI_ARQOS  = 0;

	assign	M_AXI_RREADY = 1;

	// Verilator lint_off UNUSED
	wire	unused;
	assign	unused = &{ 1'b0, S_AXIL_AWPROT, S_AXIL_ARPROT, M_AXI_RID,
			M_AXI_RRESP[0], fifo_full, wskd_strb[2:0], fifo_fill,
			ar_none_outstanding, S_AXIL_AWADDR[AXILLSB-1:0],
			S_AXIL_ARADDR[AXILLSB-1:0],
			new_wideaddr[2*C_AXIL_DATA_WIDTH-1:C_AXI_ADDR_WIDTH] };

endmodule
