using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.Models
{
    public class Faculty
    {
        public string Name { get; set; }
        public long Id { get; set; }

        public virtual ICollection<Department> Departments { get; }
        public virtual ICollection<Specialty> Specialties { get; }
    }
}
