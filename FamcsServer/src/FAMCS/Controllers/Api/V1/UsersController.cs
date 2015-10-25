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
    public class UserController : Controller
    {

        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly SignInManager<User> _signInManager;
        private readonly FamcsContext _applicationDbContext;

        public UserController(
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

        //[HttpPost]
        //[AllowAnonymous]
        //public async Task<String> Register([FromBody] RegisterViewModel model)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        var user = new User { UserName = model.Email, Email = model.Email };
        //        var result = await _userManager.CreateAsync(user, model.Password);
        //        if (result.Succeeded)
        //        {
        //            // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
        //            // Send an email with this link
        //            //var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
        //            //var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: Context.Request.Scheme);
        //            //await _emailSender.SendEmailAsync(model.Email, "Confirm your account",
        //            //    "Please confirm your account by clicking this link: <a href=\"" + callbackUrl + "\">link</a>");
        //            await _signInManager.SignInAsync(user, isPersistent: false);
        //            return "true";
        //        }
        //        return "false";
        //    }
        //    return "false";
        //}

        [HttpPost]
        [AllowAnonymous]
        public async Task<string> Login([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, model.RememberMe, lockoutOnFailure: false);
                return result.ToString();
            }
            return ModelState.IsValid.ToString();
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public async Task<ResultViewModel<UserInfoViewModel>> CreateProfessor([FromBody] UserCreateViewModel model)
        {
            var user = new User
            {
                UserName = model.FirstName + model.LastName,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "professor");
                return new ResultViewModel<UserInfoViewModel>(new UserInfoViewModel(user));
            }
            return new ResultViewModel<UserInfoViewModel>("Error happened");
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public async Task<ResultViewModel<UserInfoViewModel>> CreateStudent([FromBody] UserCreateViewModel model)
        {
            var user = new User
            {
                UserName = model.FirstName + model.LastName,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "student");
                return new ResultViewModel<UserInfoViewModel>(new UserInfoViewModel(user));
            }
            return new ResultViewModel<UserInfoViewModel>("Error happened");
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IdentityResult> CreateAdmin()
        {
            if (!_userManager.Users.Where(t => t.UserName == "admin").Any())
            {
                await _roleManager.CreateAsync(new Role() { Name = "admin" });
                await _roleManager.CreateAsync(new Role() { Name = "student" });
                await _roleManager.CreateAsync(new Role() { Name = "professor" });
                var user = new User { UserName = "admin", Email = "admin@admin.admin" };
                var result = await _userManager.CreateAsync(user, "password");
                if (result.Succeeded)
                {
                    return await _userManager.AddToRoleAsync(user, "admin");
                }
                return result;
            }
            return null;
        }

        [HttpGet]
        [AllowAnonymous]
        public ResultViewModel<IEnumerable<UserInfoViewModel>> Get()
        {
            return new ResultViewModel<IEnumerable<UserInfoViewModel>>(_applicationDbContext.Users.Where(t => t.UserName != "admin").ToList().Select(t => new UserInfoViewModel(t)).ToList());
        }


        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<UserInfoViewModel> Get(long id)
        {
            return new ResultViewModel<UserInfoViewModel>(_applicationDbContext.Users.Where(t => t.UserName != "admin" && t.Id == id).ToList().Select(t => new UserInfoViewModel(t)).FirstOrDefault());
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<IEnumerable<UserInfoViewModel>> GetByGroupId(long id)
        {
            return new ResultViewModel<IEnumerable<UserInfoViewModel>>(_applicationDbContext.Users.Where(t => t.UserName != "admin" && t.GroupId == id).ToList().Select(t => new UserInfoViewModel(t)).ToList());
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<IEnumerable<UserInfoViewModel>> GetByDepartmentId (long id)
        {
            return new ResultViewModel<IEnumerable<UserInfoViewModel>>(_applicationDbContext.Users.Where(t => t.UserName != "admin" && t.DepartmentId == id).ToList().Select(t => new UserInfoViewModel(t)).ToList());
        }

        [HttpGet]
        [AllowAnonymous]
        public ResultViewModel<IEnumerable<UserInfoViewModel>> GetProfessors()
        {
            long id = _applicationDbContext.Roles.Where(t => t.Name == "professor").First().Id;
            return new ResultViewModel<IEnumerable<UserInfoViewModel>>(_applicationDbContext.Users.Where(t => t.Roles.Any(r => r.RoleId == id)).ToList().Select(t => new UserInfoViewModel(t)).ToList());
        }
        [HttpGet]
        [AllowAnonymous]
        public ResultViewModel<IEnumerable<UserInfoViewModel>> GetStudents()
        {
            long id = _applicationDbContext.Roles.Where(t => t.Name == "student").First().Id;
            return new ResultViewModel<IEnumerable<UserInfoViewModel>>(_applicationDbContext.Users.Where(t => t.Roles.Any(r => r.RoleId == id)).ToList().Select(t => new UserInfoViewModel(t)).ToList());
        }

        [HttpPost("{userId}/{depId}")]
        [AllowAnonymous]
        public ResultViewModel<UserInfoViewModel> AssignProfessorToDepartment(long userId, long depId)
        {
            long roleId = _applicationDbContext.Roles.Where(t => t.Name == "professor").First().Id;
            var user = _applicationDbContext.Users.Where(t => t.Id == userId).FirstOrDefault();
            if (user != null)
            {
                user.DepartmentId = depId;
                _applicationDbContext.SaveChanges();
                return new ResultViewModel<UserInfoViewModel>(new UserInfoViewModel(user));
            }
            else
            {
                return new ResultViewModel<UserInfoViewModel>("No such user");
            }
        }

        [HttpPost("{userId}/{grId}")]
        [AllowAnonymous]
        public ResultViewModel<UserInfoViewModel> AssignStudentToGroup(long userId, long grId)
        {
            long roleId = _applicationDbContext.Roles.Where(t => t.Name == "student").First().Id;
            var user = _applicationDbContext.Users.Where(t => t.Id == userId).FirstOrDefault();
            if (user != null)
            {
                user.GroupId = grId;
                _applicationDbContext.SaveChanges();
                return new ResultViewModel<UserInfoViewModel>(new UserInfoViewModel(user));
            }
            else
            {
                return new ResultViewModel<UserInfoViewModel>("No such user");
            }
        }

        //[HttpPost]
        //[AllowAnonymous]
        //public ResultViewModel<IEnumerable<UserInfoViewModel>> AssignStudentToGroup()
        //{

        //}

        //Test
        //// GET: api/values
        //[Authorize(Roles = "admin")]
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/values
        //[AllowAnonymous]
        //[HttpGet]
        //public IEnumerable<string> Get2()
        //{
        //    return new string[] { "value1", "value2" };
        //}
    }
}
