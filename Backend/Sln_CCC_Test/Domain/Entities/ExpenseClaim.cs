using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class ExpenseClaim : BaseEntity
    {
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public decimal Total { get; set; }
        public bool Status { get; set; }
        public ICollection<ExpenseClaimDetail> ExpenseClaimDetails { get; set; }
    }
}
