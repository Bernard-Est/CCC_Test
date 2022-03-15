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
    public class DepartmentConfig : IEntityTypeConfiguration<Department>
    {
        public void Configure(EntityTypeBuilder<Department> departmentBuilder)
        {
            departmentBuilder.HasKey(c => c.Id);
            departmentBuilder.Property(c => c.Name).IsRequired();
            departmentBuilder.Property(c => c.CreationDate).IsRequired();
        }
    }
}
