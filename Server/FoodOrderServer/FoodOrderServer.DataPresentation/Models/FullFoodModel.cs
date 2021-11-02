using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataPresentation.Models
{    public class FullFood
    {
        public int Id { get; set; }
        public TimeSpan TimeToCook { get; set; }
        public double Cost { get; set; }
        public string DefaultLocale { get; set; }
        public string ImageSource { get; set; }
        public List<FoodLocalization> Locales { get; set; }
    }
}
