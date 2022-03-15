using Domain.DTO;
using Domain.Entities;
using Domain.NewFolder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IEmployeeService
    {
        bool Add(EmployeeAddDTO employee);
        bool Delete(int id);
        bool Update(EmployeeAddDTO employee);
        Task<List<EmployeeGetDTO>> GetAll();
        Task<EmployeeGetDTO> GetById(int id);
    }
}
