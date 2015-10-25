using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.Models
{
    public class User : IdentityUser<long>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public long? DepartmentId { get; set; }
        public virtual Department Department { get; set; }
        public long? GroupId { get; set;}
        public virtual Group Group { get; set; }
    }
}
