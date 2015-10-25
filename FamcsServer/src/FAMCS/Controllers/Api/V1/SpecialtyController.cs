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
    public class SpecialtyController : Controller
    {
        private readonly FamcsContext _applicationDbContext;

        public SpecialtyController(
            FamcsContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<SpecialtyViewModel> Get(long id)
        {
            return new ResultViewModel<SpecialtyViewModel>(_applicationDbContext.Specialties.Where(t => t.Id == id).ToList().Select(t => new SpecialtyViewModel(t)).FirstOrDefault());
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ResultViewModel<IEnumerable<SpecialtyViewModel>> GetByFaculty(long id)
        {
            return new ResultViewModel<IEnumerable<SpecialtyViewModel>>(_applicationDbContext.Specialties.Where(t => t.FacultyId == id).ToList().Select(t => new SpecialtyViewModel(t)).ToList());
        }

        [AllowAnonymous]
        [HttpGet]
        public ResultViewModel<IEnumerable<SpecialtyViewModel>> Get()
        {
            return new ResultViewModel<IEnumerable<SpecialtyViewModel>>(_applicationDbContext.Specialties.ToList().Select(t => new SpecialtyViewModel(t)).ToList());
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public ResultViewModel<SpecialtyViewModel> Create([FromBody] SpecialtyViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Specialty specialty = new Specialty();
                    specialty.Name = model.Name;
                    specialty.FacultyId = model.FacultyId;
                    var res = _applicationDbContext.Specialties.Add(specialty);
                    var result = _applicationDbContext.SaveChanges();
                    return new ResultViewModel<SpecialtyViewModel>(new SpecialtyViewModel(specialty));
                }
                return new ResultViewModel<SpecialtyViewModel>("Model is not valid");
            }
            catch (Exception e)
            {
                return new ResultViewModel<SpecialtyViewModel>(e.ToString());
            }
        }
    }
}
