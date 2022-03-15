using Domain.DTO;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IDepartementService
    {
        Task<List<DepartmentDTO>> GetAll();
        Task<Department> GetById(int id);
    }
}
