using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BSEnterprises.Persistence.Migrations
{
    public partial class AlterTableSparePart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReturnGood",
                table: "OrderItems");

            migrationBuilder.AddColumn<string>(
                name: "HsnSac",
                table: "SpareParts",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "RateOfTax",
                table: "SpareParts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HsnSac",
                table: "SpareParts");

            migrationBuilder.DropColumn(
                name: "RateOfTax",
                table: "SpareParts");

            migrationBuilder.AddColumn<double>(
                name: "ReturnGood",
                table: "OrderItems",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
