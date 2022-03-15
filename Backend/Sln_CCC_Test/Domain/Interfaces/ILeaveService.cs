using Domain.DTO;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface ILeaveService
    {
        bool Add(LeaveAddDTO leave);
        bool Delete(int id);
        bool Update(LeaveAddDTO leave);
        Task<List<LeaveGetDTO>> GetAll();
        Task<LeaveGetDTO> GetById(int id);
    }
}
