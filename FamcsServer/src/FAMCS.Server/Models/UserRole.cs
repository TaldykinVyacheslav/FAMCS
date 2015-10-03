using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FAMCS.Server.Models
{
    public class UserRole : IdentityUserRole<long>
    {
        public DateTime CreateDate { get; set; }
    }
}
