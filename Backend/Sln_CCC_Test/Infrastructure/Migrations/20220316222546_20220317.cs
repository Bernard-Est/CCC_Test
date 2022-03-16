using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    public partial class _20220317 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ExpenseClaimId",
                table: "ExpenseClaimDetail",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ExpenseClaimDetail_ExpenseClaimId",
                table: "ExpenseClaimDetail",
                column: "ExpenseClaimId");

            migrationBuilder.AddForeignKey(
                name: "FK_ExpenseClaimDetail_ExpenseClaim_ExpenseClaimId",
                table: "ExpenseClaimDetail",
                column: "ExpenseClaimId",
                principalTable: "ExpenseClaim",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ExpenseClaimDetail_ExpenseClaim_ExpenseClaimId",
                table: "ExpenseClaimDetail");

            migrationBuilder.DropIndex(
                name: "IX_ExpenseClaimDetail_ExpenseClaimId",
                table: "ExpenseClaimDetail");

            migrationBuilder.DropColumn(
                name: "ExpenseClaimId",
                table: "ExpenseClaimDetail");
        }
    }
}
