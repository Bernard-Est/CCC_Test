using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class ExpenseClaimDetail : BaseEntity
    {
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public decimal Total { get; set; }
    }
}
