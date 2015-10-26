using Famcs.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.ViewModels
{
    public class FacultyViewModel
    {
        public FacultyViewModel()
        {
        }

        public FacultyViewModel(Faculty fac)
        {
            this.Name = fac.Name;
            this.Id = fac.Id;
        }
        [Required]
        public string Name { get; set; }

        public long Id { get; set; }
    }
}
