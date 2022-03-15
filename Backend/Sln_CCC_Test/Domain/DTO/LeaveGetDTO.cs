using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTO
{
    public class LeaveGetDTO
    {
        public int Id { get; set; }
        public string LeaveType { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public int NumberOfDays { get; set; }
        public string Notes { get; set; }
    }
}
