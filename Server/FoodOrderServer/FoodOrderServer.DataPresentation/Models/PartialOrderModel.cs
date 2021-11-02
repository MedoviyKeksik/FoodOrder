using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataPresentation.Models
{
    public class PartialOrderModel
    {
        public int TotalCount { get; set; }
        public ICollection<Order> Items { get; set; }
    }
}
