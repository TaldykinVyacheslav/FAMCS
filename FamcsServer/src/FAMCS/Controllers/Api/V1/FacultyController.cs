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
    public class FacultyController : Controller
    {
        private readonly FamcsContext _applicationDbContext;

        public FacultyController(
            FamcsContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<FacultyViewModel> Get(long id)
        {
            return new ResultViewModel<FacultyViewModel>(_applicationDbContext.Faculties.Where(t => t.Id == id).ToList().Select(t => new FacultyViewModel(t)).FirstOrDefault());
        }

        [AllowAnonymous]
        [HttpGet]
        public ResultViewModel<IEnumerable<FacultyViewModel>> Get()
        {
            return new ResultViewModel<IEnumerable<FacultyViewModel>>(_applicationDbContext.Faculties.ToList().Select(t => new FacultyViewModel(t)).ToList());
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public ResultViewModel<FacultyViewModel> Create([FromBody] FacultyViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Faculty faculty = new Faculty();
                    faculty.Name = model.Name;
                    var res = _applicationDbContext.Faculties.Add(faculty);
                    var result = _applicationDbContext.SaveChanges();
                    return new ResultViewModel<FacultyViewModel>(new FacultyViewModel(faculty));
                }
                return new ResultViewModel<FacultyViewModel>("Model is not valid");
            }
            catch (Exception e)
            {
                return new ResultViewModel<FacultyViewModel>(e.ToString());
            }
        }
    }
}
