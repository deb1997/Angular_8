using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RSNWebAPIs.Models
{
    public class Employees
    {
        public int e_id { get; set; }
        public string e_name { get; set; }
        public int e_sal { get; set; }
    }

    public class mesBody
    {
        public string [] msg { get; set; }
    }
}