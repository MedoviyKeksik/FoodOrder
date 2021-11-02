using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataPresentation.Models
{
    public class FoodInOrder
    {
        public int Id { get; set; }
        public int FoodId { get; set; }
        public int OrderId { get; set; }
        public int Count { get; set; }
    }
}
