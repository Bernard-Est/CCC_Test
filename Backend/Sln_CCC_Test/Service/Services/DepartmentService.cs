using Domain.DTO;
using Domain.Entities;
using Domain.Interfaces;
using Infrastructure;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class DepartmentService : IDepartementService
    {
        private readonly IGenericRepository<Department> _repo;

        public DepartmentService(IGenericRepository<Department> repo)
        {
            _repo = repo;
        }

        public async Task<List<DepartmentDTO>> GetAll()
        {
            //return await _repo.GetAll();
            return await _repo.GetQueryable().Select(e => new DepartmentDTO
            {
                DepartmentId = e.Id,
                Name = e.Name,

            }).ToListAsync();
        }

        public async Task<Department> GetById(int id)
        {
            return await _repo.GetById(id);
        }
    }
}
