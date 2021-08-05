using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Entities
{
    public class Order : BaseEntity
    {
        public int UserId { get; set; }
        public DateTime Time { get; set; }
        public int Status { get; set; }
    }
}
