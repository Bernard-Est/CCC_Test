using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    public partial class _20220316 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EmployeeId",
                table: "Leave",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Leave_EmployeeId",
                table: "Leave",
                column: "EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Leave_Employee_EmployeeId",
                table: "Leave",
                column: "EmployeeId",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Leave_Employee_EmployeeId",
                table: "Leave");

            migrationBuilder.DropIndex(
                name: "IX_Leave_EmployeeId",
                table: "Leave");

            migrationBuilder.DropColumn(
                name: "EmployeeId",
                table: "Leave");
        }
    }
}
