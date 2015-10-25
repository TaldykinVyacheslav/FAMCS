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
    public class DepartmentController : Controller
    {

        private readonly FamcsContext _applicationDbContext;

        public DepartmentController(
            FamcsContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<DepartmentViewModel> Get(long id)
        {
            return new ResultViewModel<DepartmentViewModel>(_applicationDbContext.Departments.Where(t => t.Id == id).ToList().Select(t => new DepartmentViewModel(t)).FirstOrDefault());
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<IEnumerable<DepartmentViewModel>> GetByFaculty(long id)
        {
            return new ResultViewModel<IEnumerable<DepartmentViewModel>>(_applicationDbContext.Departments.Where(t => t.FacultyId == id).ToList().Select(t => new DepartmentViewModel(t)).ToList());
        }

        [AllowAnonymous]
        [HttpGet]
        public ResultViewModel<IEnumerable<DepartmentViewModel>> Get()
        {
            return new ResultViewModel<IEnumerable<DepartmentViewModel>>(_applicationDbContext.Departments.ToList().Select(t => new DepartmentViewModel(t)).ToList());
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public ResultViewModel<DepartmentViewModel> Create([FromBody] DepartmentViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Department department = new Department();
                    department.Name = model.Name;
                    department.FacultyId = model.FacultyId;
                    var res = _applicationDbContext.Departments.Add(department);
                    var result = _applicationDbContext.SaveChanges();
                    return new ResultViewModel<DepartmentViewModel>(new DepartmentViewModel(department));
                }
                return new ResultViewModel<DepartmentViewModel>("Model is not valid");
            }
            catch (Exception e)
            {
                return new ResultViewModel<DepartmentViewModel>(e.ToString());
            }
        }
    }
}
