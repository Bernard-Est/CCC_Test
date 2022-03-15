using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IExpenseClaimService
    {
        bool Add(ExpenseClaim expenseClaim);
        bool Delete(int id);
        bool Update(ExpenseClaim expenseClaim);
        Task<List<ExpenseClaim>> GetAll();
        Task<ExpenseClaim> GetById(int id);
    }
}
