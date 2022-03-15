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
    public class EmployeeConfig: IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> employeeBuilder)
        {
            employeeBuilder.HasKey(c => c.Id);
            employeeBuilder.Property(c => c.Name).IsRequired();
            employeeBuilder.Property(c => c.Email).IsRequired();
            employeeBuilder.Property(c => c.Address).IsRequired();
            employeeBuilder.HasOne(i => i.Department).WithMany(c => c.Employees);
            employeeBuilder.Property(i => i.CreationDate).IsRequired();
        }
    }
}
