using Famcs.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.ViewModels
{
    public class SpecialtyViewModel
    {
        public SpecialtyViewModel()
        {
        }

        public SpecialtyViewModel(Specialty spec)
        {
            this.Name = spec.Name;
            this.Id = spec.Id;
            this.FacultyId = spec.FacultyId;
        }
        [Required]
        public string Name { get; set; }

        public long Id { get; set; }
        [Required]
        public long FacultyId { get; set; }
    }
}
