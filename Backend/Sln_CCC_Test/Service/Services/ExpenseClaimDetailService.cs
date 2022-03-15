using Domain.Entities;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ExpenseClaimDetailService : iExpenseClaimDetailService
    {
        private readonly IGenericRepository<ExpenseClaimDetail> _repo;

        public ExpenseClaimDetailService(IGenericRepository<ExpenseClaimDetail> repo)
        {
            _repo = repo;
        }

        public bool Add(ExpenseClaimDetail expenseClaimDetail)
        {
            return _repo.Add(expenseClaimDetail);
        }

        public bool Delete(int id)
        {
            return _repo.Delete(id);
        }

        public async Task<List<ExpenseClaimDetail>> GetAll()
        {
            return await _repo.GetAll();
        }

        public async Task<ExpenseClaimDetail> GetById(int id)
        {
            return await _repo.GetById(id);
        }

        public bool Update(ExpenseClaimDetail expenseClaimDetail)
        {
            return _repo.Update(expenseClaimDetail);
        }
    }
}
