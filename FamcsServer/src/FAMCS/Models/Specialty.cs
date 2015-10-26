using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.Models
{
    public class Specialty
    {
        public long Id { get; set; }
        public long FacultyId { get; set; }
        public string Name { get; set; }

        public virtual Faculty Faculty { get; set; }
        public virtual ICollection<Group> Groups { get; }
    }
}
