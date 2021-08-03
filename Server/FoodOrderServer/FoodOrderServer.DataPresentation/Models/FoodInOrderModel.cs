using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataPresentation.Models
{
    class FoodInOrder
    {
        public int FoodId { get; set; }
        public int OrderId { get; set; }
        public int Count { get; set; }
    }
}
