using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FAMCS.Server.Models
{
    public class Group
    {
        public long Id { get; set; }
        public DateTime AdmissionDate { get; set; }
        public long SpecialtyId { get; set; }
        public long DepartmentId { get; set; }

        public virtual Specialty Specialty { get; }
        public virtual Department Department { get; }
        public virtual ICollection<User> Users { get; }
    }
}
