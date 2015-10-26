using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.Models
{
    public class UserRole : IdentityUserRole<long>
    {
        public DateTime CreateDate { get; set; }
    }
}
