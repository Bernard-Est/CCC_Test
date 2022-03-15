using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Leave : BaseEntity
    {
        public int LeaveTypeId { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public int NumberOfDays { get; set; }
        public string Notes { get; set; }
        public LeaveType LeaveType { get; set; }
    }
}
