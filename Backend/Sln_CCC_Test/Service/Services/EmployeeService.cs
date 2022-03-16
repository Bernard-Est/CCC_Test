using Domain.DTO;
using Domain.Entities;
using Domain.Interfaces;
using Domain.NewFolder;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IGenericRepository<Employee> _repo;

        public EmployeeService(IGenericRepository<Employee> repo)
        {
            _repo = repo;
        }

        public bool Add(EmployeeAddDTO employeeDTO)
        {
            var employee = new Employee
            {
              Name = employeeDTO.Name,
              Email = employeeDTO.Email,
              Address = employeeDTO.Address,
              DepartmentId=employeeDTO.DepartmentId
            };
           return _repo.Add(employee);
        }

        public bool Delete(int id)
        {
            return _repo.Delete(id);
        }

        public async Task<List<EmployeeGetDTO>> GetAll()
        {
            return await _repo.GetQueryable().Include(e => e.Department).Select(e => new EmployeeGetDTO { 
            Id = e.Id,
            Name = e.Name,
            Email=e.Email,
            Address=e.Address,
            DepartementName = e.Department.Name
            }).ToListAsync();
        }

        public bool Update(EmployeeAddDTO employee)
        {
            var emps = _repo.GetQueryable().Where(e => e.Id == employee.Id);
            var empl = new Employee
            {
                Id = (int)employee.Id,
                Name = employee.Name,
                Email = employee.Email,
                Address = employee.Address,
                DepartmentId = employee.DepartmentId
            };
            return _repo.Update(empl);

        }

        public async Task<EmployeeGetDTO> GetById(int id)
        {
            return await _repo.GetQueryable().Include(e => e.Department).Select(e => new EmployeeGetDTO
            {
                Id = e.Id,
                Name = e.Name,
                Email = e.Email,
                Address = e.Address,
                DepartementName = e.Department.Name
            }).Where(w => w.Id == id).FirstOrDefaultAsync();
        }
    }
}
