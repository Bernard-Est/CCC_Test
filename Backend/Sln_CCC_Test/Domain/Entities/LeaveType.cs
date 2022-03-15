using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class LeaveType : BaseEntity
    {
        public string Name { get; set; }
        public ICollection<Leave> Leaves { get; set; }
    }
}
