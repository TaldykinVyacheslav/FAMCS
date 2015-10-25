using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Identity;
using Famcs.Models;
using Famcs.ViewModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Famcs.Controllers.Api.V1
{
    [Authorize]
    [Route("api/v1/[controller]/[action]")]
    public class GroupController : Controller
    {

        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly SignInManager<User> _signInManager;
        private readonly FamcsContext _applicationDbContext;

        public GroupController(
            RoleManager<Role> roleManager,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            FamcsContext applicationDbContext)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _signInManager = signInManager;
            _applicationDbContext = applicationDbContext;
        }
    }
}
