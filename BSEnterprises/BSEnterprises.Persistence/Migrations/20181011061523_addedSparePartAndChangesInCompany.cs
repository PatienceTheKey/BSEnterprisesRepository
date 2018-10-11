using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BSEnterprises.Persistence.Migrations
{
    public partial class addedSparePartAndChangesInCompany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HsnSac",
                table: "SpareParts",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "RateOfTax",
                table: "SpareParts",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CompanyId",
                table: "OrderItems",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "LeftInBag",
                table: "OrderItems",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "ReturnDefective",
                table: "OrderItems",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_CompanyId",
                table: "OrderItems",
                column: "CompanyId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Companies_CompanyId",
                table: "OrderItems",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Companies_CompanyId",
                table: "OrderItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_CompanyId",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "HsnSac",
                table: "SpareParts");

            migrationBuilder.DropColumn(
                name: "RateOfTax",
                table: "SpareParts");

            migrationBuilder.DropColumn(
                name: "CompanyId",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "LeftInBag",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "ReturnDefective",
                table: "OrderItems");
        }
    }
}
