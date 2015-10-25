using Famcs.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.ViewModels
{
    public class UserInfoViewModel
    {
        public UserInfoViewModel()
        { }

        public UserInfoViewModel(User user)
        {
            this.FirstName = user.FirstName;
            this.LastName = user.LastName;
            this.Id = user.Id;
        }

        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
