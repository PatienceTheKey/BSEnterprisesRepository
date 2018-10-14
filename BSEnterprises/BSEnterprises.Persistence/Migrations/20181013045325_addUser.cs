using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BSEnterprises.Persistence.Migrations
{
    public partial class addUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    AccountNumber = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    BankName = table.Column<string>(nullable: true),
                    ContactNumber = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Gstin = table.Column<string>(nullable: true),
                    IfscCode = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Pan = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    Subject = table.Column<string>(nullable: true),
                    TermsAndCondition = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
