using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BSEnterprises.Persistence.Migrations
{
    public partial class changesInSpareParts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "SpareParts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Model",
                table: "SpareParts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Code",
                table: "SpareParts");

            migrationBuilder.DropColumn(
                name: "Model",
                table: "SpareParts");
        }
    }
}
