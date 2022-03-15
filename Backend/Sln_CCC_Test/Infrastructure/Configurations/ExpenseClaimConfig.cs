using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Configurations
{
    public class ExpenseClaimConfig : IEntityTypeConfiguration<ExpenseClaim>
    {
        public void Configure(EntityTypeBuilder<ExpenseClaim> expenseClaimBuilder)
        {
            expenseClaimBuilder.HasKey(c => c.Id);
            expenseClaimBuilder.Property(c => c.Date).IsRequired();
            expenseClaimBuilder.Property(c => c.Description).IsRequired();
            expenseClaimBuilder.Property(c => c.Total).IsRequired();
            expenseClaimBuilder.Property(c => c.Status).IsRequired();
            expenseClaimBuilder.Property(c => c.CreationDate).IsRequired();
        }
    }
}
