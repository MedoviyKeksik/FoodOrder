using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Entities
{
    public class Role : BaseEntity
    {
        public string Title { get; set; }
        public string Permissions { get; set; }
    }
}
