using Domain.DTO;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class LeaveTypeService : ILeaveTypeService
    {
        private readonly IGenericRepository<LeaveType> _repo;
    public LeaveTypeService(IGenericRepository<LeaveType> repo)
        {
            _repo = repo;
        }

        public async Task<List<LeaveTypeDTO>> GetAll()
        {
            return await _repo.GetQueryable().Select(e => new LeaveTypeDTO
            {
                LeaveTypeId = e.Id,
                Name = e.Name,

            }).ToListAsync();
        }
    }
}
