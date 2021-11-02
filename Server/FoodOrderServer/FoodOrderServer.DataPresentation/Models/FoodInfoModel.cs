using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataPresentation.Models
{
    public class FoodInfoModel
    {
        public int Id { get; set; }
        public int TimeToCook { get; set; }
        public double Cost { get; set; }
        public string DefaultLocale { get; set; }
        public string Image { get; set; }
        public string Filename { get; set; }
        public List<FoodLocalization> Locales { get; set; }
    }
}
