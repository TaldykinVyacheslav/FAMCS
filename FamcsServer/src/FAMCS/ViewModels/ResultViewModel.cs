using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Famcs.ViewModels
{
    public class ResultViewModel<T>
    {
        public ResultViewModel(string errorDesc)
        {
            this.Description = errorDesc;
            this.Code = "Error";
        }
        public ResultViewModel(T result)
        {
            this.Result = result;
            this.Code = "Ok";
        }
        public string Description;
        public string Code;
        public T Result;
    }
}
