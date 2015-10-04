using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FAMCS.Server.Models
{
    public class Specialty
    {
        public long Id { get; set; }
        public long FacultyId { get; set; }

        public virtual Faculty Faculty { get; set; }
        public virtual ICollection<Group> Groups { get; }
    }
}
