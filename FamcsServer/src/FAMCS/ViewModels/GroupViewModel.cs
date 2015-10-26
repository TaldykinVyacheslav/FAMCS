using Famcs.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.ViewModels
{
    public class GroupViewModel
    {
        public GroupViewModel()
        {
        }

        public GroupViewModel(Group gr)
        {
            this.AdmissionDate = gr.AdmissionDate;
            this.SpecialtyId = gr.SpecialtyId;
            this.Id = gr.Id;
            this.DepartmentId = gr.DepartmentId;
            this.Name = gr.Name;
        }
        [Required]
        public string Name { get; set; }
        public long Id { get; set; }
        [Required]
        public DateTime AdmissionDate { get; set; }
        [Required]
        public long SpecialtyId { get; set; }
        [Required]
        public long DepartmentId { get; set; }
    }
}
