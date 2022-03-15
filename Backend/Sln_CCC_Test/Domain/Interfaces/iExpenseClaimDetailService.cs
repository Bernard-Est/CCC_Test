using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface iExpenseClaimDetailService
    {
        bool Add(ExpenseClaimDetail expenseClaimDetail);
        bool Delete(int id);
        bool Update(ExpenseClaimDetail expenseClaimDetail);
        Task<List<ExpenseClaimDetail>> GetAll();
        Task<ExpenseClaimDetail> GetById(int id);
    }
}
