using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BSEnterprises.Persistence.Migrations
{
    public partial class AddTableBillingSparePart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BillingSpareParts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CustomerAddress = table.Column<string>(nullable: true),
                    CustomerContact = table.Column<string>(nullable: true),
                    CustomerGstin = table.Column<string>(nullable: true),
                    CustomerName = table.Column<string>(nullable: true),
                    CustomerState = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    PlaceOfSupply = table.Column<string>(nullable: true),
                    TotalInvoiceValue = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BillingSpareParts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BillingSparePartItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BillingSparePartId = table.Column<int>(nullable: true),
                    CgstAmount = table.Column<double>(nullable: false),
                    Discount = table.Column<double>(nullable: false),
                    HsnCode = table.Column<string>(nullable: true),
                    IgstAmount = table.Column<double>(nullable: false),
                    ProductId = table.Column<int>(nullable: false),
                    Quantity = table.Column<double>(nullable: false),
                    Rate = table.Column<double>(nullable: false),
                    SgstAmount = table.Column<double>(nullable: false),
                    Total = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BillingSparePartItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BillingSparePartItems_BillingSpareParts_BillingSparePartId",
                        column: x => x.BillingSparePartId,
                        principalTable: "BillingSpareParts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BillingSparePartItems_BillingSparePartId",
                table: "BillingSparePartItems",
                column: "BillingSparePartId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BillingSparePartItems");

            migrationBuilder.DropTable(
                name: "BillingSpareParts");
        }
    }
}
