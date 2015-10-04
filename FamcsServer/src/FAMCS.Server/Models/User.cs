using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FAMCS.Server.Models
{
    public class User : IdentityUser<long>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public long? DepartamentId { get; set; }
        public virtual Department Department { get; set; }
        public long? GroupID { get; set;}
        public virtual Group Group { get; set; }
    }
}
