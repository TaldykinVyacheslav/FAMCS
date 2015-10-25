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
    public class HelpController : Controller
    {

        private readonly FamcsContext _applicationDbContext;

        public HelpController(
            FamcsContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [AllowAnonymous]
        [HttpGet]
        public JsonResult GetDocs()
        {
            var docs = new
            {
                usersRequests = new
                {
                    login = new
                    {
                        path = "api/v1/user/login",
                        method = "POST",
                        bodyExample = new
                        {
                            UserName = "admin",
                            Password = "password",
                            RememberMe = "false"
                        },
                        headers = new { name = "Content-Type", value = "application/json" },
                        roles = "all",
                        remark = "return cookies to auth"
                    },
                    createProfessor = new
                    {
                        path = "api/v1/user/createProfessor",
                        method = "POST",
                        bodyExample = new
                        {
                            FirstName = "Vasya",
                            LastName = "Petrovich",
                            Email = "vasya@vasya.vasya",
                            Password = "password"
                        },
                        headers = new { name = "Content-Type", value = "application/json" },
                        roles = "admin",
                        remark = "create professor"
                    },
                    createStudent = new
                    {
                        path = "api/v1/user/createStudent",
                        method = "POST",
                        bodyExample = new
                        {
                            FirstName = "Vasya",
                            LastName = "Petrovich",
                            Email = "vasya@vasya.vasya",
                            Password = "password"
                        },
                        headers = new { name = "Content-Type", value = "application/json" },
                        roles = "admin",
                        remark = "create professor"
                    },
                    getAllUsers = new
                    {
                        path = "api/v1/user/get",
                        method = "GET",
                        roles = "all",
                    },
                    GetUserById = new
                    {
                        path = "api/v1/user/get/42",
                        method = "GET",
                        roles = "all",
                    }
                },
                facultyRequests = new
                {
                    createFaculty = new
                    {
                        path = "api/v1/faculty/create",
                        method = "POST",
                        bodyExample = new
                        {
                            Name = "FAMCS"
                        },
                        headers = new { name = "Content-Type", value = "application/json" },
                        roles = "admin"
                    },
                    GetFacultyById = new
                    {
                        path = "api/v1/faculty/get/42",
                        method = "GET",
                        roles = "all",
                    },
                    GetFaculties = new
                    {
                        path = "api/v1/faculty/get",
                        method = "GET",
                        roles = "all",
                    }
                },
                departmentRequests = new
                {
                    createDepartment = new
                    {
                        path = "api/v1/department/create",
                        method = "POST",
                        bodyExample = new
                        {
                            Name = "ISU",
                            FacultyId = "1"
                        },
                        headers = new { name = "Content-Type", value = "application/json" },
                        roles = "admin"
                    },
                    GetDepartmentById = new
                    {
                        path = "api/v1/department/get/42",
                        method = "GET",
                        roles = "all",
                    },
                    GetDepartments = new
                    {
                        path = "api/v1/department/get",
                        method = "GET",
                        roles = "all",
                    },
                    GetDepartmentByFacultyId = new
                    {
                        path = "api/v1/department/getByFaculty/42",
                        method = "GET",
                        roles = "all",
                    }
                },
                specialtyRequests = new
                {
                    createSpecialty = new
                    {
                        path = "api/v1/specialty/create",
                        method = "POST",
                        bodyExample = new
                        {
                            Name = "ACS",
                            FacultyId = "1"
                        },
                        headers = new { name = "Content-Type", value = "application/json" },
                        roles = "admin"
                    },
                    GetSpecialtyById = new
                    {
                        path = "api/v1/specialty/get/42",
                        method = "GET",
                        roles = "all",
                    },
                    GetSpecialties = new
                    {
                        path = "api/v1/specialty/get",
                        method = "GET",
                        roles = "all",
                    },
                    GetSpecialtyByFacultyId = new
                    {
                        path = "api/v1/specialty/getByFaculty/42",
                        method = "GET",
                        roles = "all",
                    }
                }
            };

            return Json(docs);
        }
    }
}
