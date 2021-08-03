using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FoodOrderServer.DataAccess.Migrations
{
    public partial class Food : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Food",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TimeToCook = table.Column<TimeSpan>(type: "time", nullable: false),
                    Cost = table.Column<float>(type: "real", nullable: false),
                    DefaultLocaleId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Food");
        }
    }
}
