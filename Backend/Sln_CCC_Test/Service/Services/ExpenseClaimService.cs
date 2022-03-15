using Domain.Entities;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ExpenseClaimService : IExpenseClaimService
    {
        private readonly IGenericRepository<ExpenseClaim> _repo;

        public ExpenseClaimService(IGenericRepository<ExpenseClaim> repo)
        {
            _repo = repo;
        }

        public bool Add(ExpenseClaim expenseClaim)
        {
            return _repo.Add(expenseClaim);
        }

        public bool Delete(int id)
        {
            return _repo.Delete(id);
        }

        public async Task<List<ExpenseClaim>> GetAll()
        {
            return await _repo.GetAll();
        }

        public async Task<ExpenseClaim> GetById(int id)
        {
            return await _repo.GetById(id);
        }

        public bool Update(ExpenseClaim expenseClaim)
        {
            return _repo.Update(expenseClaim);
        }
    }
}
