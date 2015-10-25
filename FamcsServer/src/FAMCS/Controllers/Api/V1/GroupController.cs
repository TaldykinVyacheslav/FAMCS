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

        private readonly FamcsContext _applicationDbContext;

        public GroupController(
            FamcsContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<GroupViewModel> Get(long id)
        {
            return new ResultViewModel<GroupViewModel>(_applicationDbContext.Groups.Where(t => t.Id == id).ToList().Select(t => new GroupViewModel(t)).FirstOrDefault());
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<IEnumerable<GroupViewModel>> GetByDepartment(long id)
        {
            return new ResultViewModel<IEnumerable<GroupViewModel>>(_applicationDbContext.Groups.Where(t => t.DepartmentId == id).ToList().Select(t => new GroupViewModel(t)).ToList());
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<IEnumerable<GroupViewModel>> GetBySpecialty(long id)
        {
            return new ResultViewModel<IEnumerable<GroupViewModel>>(_applicationDbContext.Groups.Where(t => t.SpecialtyId == id).ToList().Select(t => new GroupViewModel(t)).ToList());
        }

        [AllowAnonymous]
        [HttpGet]
        public ResultViewModel<IEnumerable<GroupViewModel>> Get()
        {
            return new ResultViewModel<IEnumerable<GroupViewModel>>(_applicationDbContext.Groups.ToList().Select(t => new GroupViewModel(t)).ToList());
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public ResultViewModel<GroupViewModel> Create([FromBody] GroupViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Group group = new Group();
                    group.Name = model.Name;
                    group.SpecialtyId = model.SpecialtyId;
                    group.DepartmentId = model.DepartmentId;
                    group.AdmissionDate = model.AdmissionDate;
                    var res = _applicationDbContext.Groups.Add(group);
                    var result = _applicationDbContext.SaveChanges();
                    return new ResultViewModel<GroupViewModel>(new GroupViewModel(group));
                }
                return new ResultViewModel<GroupViewModel>("Model is not valid");
            }
            catch (Exception e)
            {
                return new ResultViewModel<GroupViewModel>(e.ToString());
            }
        }

    }
}
