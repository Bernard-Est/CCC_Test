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
    public class ExpenseClaimDetailConfig : IEntityTypeConfiguration<ExpenseClaimDetail>
    {
        public void Configure(EntityTypeBuilder<ExpenseClaimDetail> expenseClaimDetailBuilder)
        {
            expenseClaimDetailBuilder.HasKey(c => c.Id);
            expenseClaimDetailBuilder.Property(c => c.Date).IsRequired();
            expenseClaimDetailBuilder.Property(c => c.Description).IsRequired();
            expenseClaimDetailBuilder.Property(c => c.Total).IsRequired();
            expenseClaimDetailBuilder.Property(c => c.CreationDate).IsRequired();
        }
    }
}
