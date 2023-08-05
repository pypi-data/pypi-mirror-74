
module sdp
  #(
    W_DATA = 16,
    W_ADDR = 16,
    DEPTH = 1024
    )
   (
    input                         clk,
    input                         rst,

    output wire                   wr_addr_data_ready,
    input wire                    wr_addr_data_valid,
    input wire [W_DATA+W_ADDR-1:0] wr_addr_data_data,

    output wire                   rd_addr_ready,
    input wire                    rd_addr_valid,
    input wire [W_ADDR-1:0]       rd_addr_data,

    input wire                    rd_data_ready,
    output wire                   rd_data_valid,
    output wire [W_DATA-1:0]       rd_data_data
    );

   wire  wr_en_s;
   wire [W_ADDR-1:0] wr_addr_s;
   wire [W_DATA-1:0] wr_data_s;
   wire              rd_en_s;
   wire [W_ADDR-1:0] rd_addr_s;
   wire [W_DATA-1:0] rd_data_s;

   sdp_wr_port
     #(
       .W_DATA(W_DATA),
       .W_ADDR(W_ADDR)
       )
   m_wr_port
     (
      .clk(clk),
      .rst(rst),
      .addr_data_ready(wr_addr_data_ready),
      .addr_data_valid(wr_addr_data_valid),
      .addr_data_data(wr_addr_data_data),
      .en_o(wr_en_s),
      .addr_o(wr_addr_s),
      .data_o(wr_data_s)
      );

   sdp_rd_port
     #(
       .W_DATA(W_DATA),
       .W_ADDR(W_ADDR)
       )
   m_rd_port
     (
      .clk(clk),
      .rst(rst),
      .addr_ready(rd_addr_ready),
      .addr_valid(rd_addr_valid),
      .addr_data(rd_addr_data),
      .data_ready(rd_data_ready),
      .data_valid(rd_data_valid),
      .data_data(rd_data_data),
      .en_o(rd_en_s),
      .addr_o(rd_addr_s),
      .data_i(rd_data_s)
      );

   sdp_mem
     #(
       .W_DATA(W_DATA),
       .W_ADDR(W_ADDR),
       .DEPTH(DEPTH)
       )
   m_ram
     (
      .clk(clk),
      .ena(wr_en_s),
      .enb(rd_en_s),
      .wea(wr_en_s),
      .addra(wr_addr_s),
      .addrb(rd_addr_s),
      .dia(wr_data_s),
      .dob(rd_data_s)
      );

endmodule

module sdp_mem #(
                 W_DATA = 16,
                 W_ADDR = 6,
                 DEPTH = 64
                 )
   (
    input                   clk,
    input                   ena, // primary global enable
    input                   enb, // dual global enable
    input                   wea, // primary write enable
    input [W_ADDR-1:0]      addra, // write address / primary read address
    input [W_ADDR-1:0]      addrb, // dual read address
    input [W_DATA-1:0]      dia, // primary data input
    output reg [W_DATA-1:0] dob    //dual output port
    );

   reg [W_DATA-1:0]         ram [DEPTH-1:0];

   always @(posedge clk) begin
      if (ena) begin
         if (wea) begin
            ram[addra] <= dia;
         end
      end
   end

   always @(posedge clk) begin
      if (enb) begin
         dob <= ram[addrb];
      end
   end

endmodule


module sdp_rd_port #(
                     W_DATA = 16,
                     W_ADDR = 16
                     )
   (
    input                   clk,
    input                   rst,
    output wire             addr_ready,
    input wire              addr_valid,
    input wire [W_ADDR-1:0] addr_data,

    input wire              data_ready,
    output wire             data_valid,
    output wire [W_DATA-1:0] data_data,
    // memory connections
    output                  en_o,
    output [W_ADDR-1:0]     addr_o,
    input [W_DATA-1:0]      data_i
    );

   reg                    data_dvalid_reg;
   wire                    is_empty;
   assign is_empty = !(data_dvalid_reg & !data_ready);

   // to memory
   assign addr_o = addr_data;
   assign en_o = addr_valid & is_empty;

   // address interface
   assign addr_ready = is_empty;

   // data interface
   assign data_data   = data_i;
   assign data_valid = data_dvalid_reg;

   // valid and eot for data interface are registered
   always @(posedge clk) begin
      if (rst) begin
         data_dvalid_reg <= 1'b0;
      end
      else begin
         if (is_empty) begin
            data_dvalid_reg <= en_o;
         end
      end
   end

endmodule

module sdp_wr_port #(
                     W_DATA = 16,
                     W_ADDR = 16
                     )
   (
    input                         clk,
    input                         rst,

    output wire                   addr_data_ready,
    input wire                    addr_data_valid,
    input wire [W_DATA+W_ADDR-1:0] addr_data_data,
    // memory connections
    output                        en_o,
    output [W_ADDR-1:0]           addr_o,
    output [W_DATA-1:0]           data_o
    );

   // to input
   assign addr_data_ready = 1'b1;

   // to memory
   assign data_o = addr_data_data[W_DATA+W_ADDR-1:W_ADDR];
   assign addr_o = addr_data_data[W_ADDR-1:0];
   assign en_o = addr_data_valid;

endmodule
