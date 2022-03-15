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
    public class LeaveConfig : IEntityTypeConfiguration<Leave>
    {
        public void Configure(EntityTypeBuilder<Leave> leaveBuilder)
        {
            leaveBuilder.HasKey(c => c.Id);
            leaveBuilder.HasOne(i => i.LeaveType).WithMany(c => c.Leaves);
            leaveBuilder.Property(c => c.From).IsRequired();
            leaveBuilder.Property(c => c.To).IsRequired();
            leaveBuilder.Property(c => c.NumberOfDays).IsRequired();
            leaveBuilder.Property(c => c.Notes);
            leaveBuilder.Property(c => c.CreationDate).IsRequired();
        }
    }
}
