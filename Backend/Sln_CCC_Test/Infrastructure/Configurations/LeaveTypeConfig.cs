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
    public class LeaveTypeConfig : IEntityTypeConfiguration<LeaveType>
    {
        public void Configure(EntityTypeBuilder<LeaveType> leaveTypeBuilder)
        {
            leaveTypeBuilder.HasKey(c => c.Id);
            leaveTypeBuilder.Property(c => c.Name).IsRequired();
            leaveTypeBuilder.Property(c => c.CreationDate).IsRequired();
        }
    }
}
