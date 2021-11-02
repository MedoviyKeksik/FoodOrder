using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataPresentation.Models
{
    public class PartialFood
    {
        public int TotalCount { get; set; }
        public List<Food> Items { get; set; }
    }
}
