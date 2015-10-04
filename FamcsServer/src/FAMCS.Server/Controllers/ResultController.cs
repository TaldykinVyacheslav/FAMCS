using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FAMCS.Server.Controllers
{
    [Route("[controller]/[action]")]
    public class ResultController : Controller
    {
        // GET: api/values
        public string AccessDenied()
        {
            return "AccessDenied";
        }

        public string NotAuth()
        {
            return "NotAuth";
        }
        
    }
}
