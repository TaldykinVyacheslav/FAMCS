using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.Models
{
    public class Department
    {
        public string Name { get; set; }
        public long Id { get; set; }
        public long FacultyId { get; set; }

        public virtual Faculty Faculty { get; set; }
        public virtual ICollection<User> Professors { get; }
        public virtual ICollection<Group> Groups { get; }
    }
}
