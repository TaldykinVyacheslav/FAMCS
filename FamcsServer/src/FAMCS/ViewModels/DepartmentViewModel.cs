using Famcs.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.ViewModels
{
    public class DepartmentViewModel
    {
        public DepartmentViewModel()
        {
        }

        public DepartmentViewModel(Department dep)
        {
            this.Name = dep.Name;
            this.Id = dep.Id;
            this.FacultyId = dep.FacultyId;
        }
        [Required]
        public string Name { get; set; }

        public long Id { get; set; }
        [Required]
        public long FacultyId { get; set; }
    }
}
