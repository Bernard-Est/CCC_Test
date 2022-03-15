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
    public class LeaveService : ILeaveService
    {
        private readonly IGenericRepository<Leave> _repo;

        public LeaveService(IGenericRepository<Leave> repo)
        {
            _repo = repo;
        }

        public bool Add(LeaveAddDTO leaveDTO)
        {
            var leave = new Leave
            {
                LeaveTypeId = leaveDTO.LeaveTypeId,
                From = leaveDTO.From,
                To = leaveDTO.To,
                NumberOfDays = leaveDTO.NumberOfDays,
                Notes = leaveDTO.Notes
            };
            return _repo.Add(leave);
        }

        public bool Delete(int id)
        {
            return _repo.Delete(id);
        }

        public async Task<List<LeaveGetDTO>> GetAll()
        {
            return await _repo.GetQueryable().Include(e => e.LeaveType).Select(e => new LeaveGetDTO
            {
                Id = e.Id,
                LeaveType = e.LeaveType.Name,
                From = e.From,
                To= e.To,
                NumberOfDays= e.NumberOfDays,
                Notes= e.Notes
            }).ToListAsync();
        }

        public async Task<LeaveGetDTO> GetById(int id)
        {
            return await _repo.GetQueryable().Include(e => e.LeaveType).Select(e => new LeaveGetDTO
            {
                Id = e.Id,
                LeaveType = e.LeaveType.Name,
                From = e.From,
                To = e.To,
                NumberOfDays = e.NumberOfDays,
                Notes = e.Notes
            }).Where(w => w.Id == id).FirstOrDefaultAsync();
        }

        public bool Update(LeaveAddDTO leave)
        {
            var emps = _repo.GetQueryable().Where(e => e.Id == leave.Id);
            var lea = new Leave
            {
                LeaveTypeId = leave.LeaveTypeId,
                From = leave.From,
                To = leave.To,
                NumberOfDays = leave.NumberOfDays,
                Notes = leave.Notes
            };
            return _repo.Update(lea);
        }
    }
}
