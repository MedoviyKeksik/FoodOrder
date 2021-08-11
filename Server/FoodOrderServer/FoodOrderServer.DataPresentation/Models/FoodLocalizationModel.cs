using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataPresentation.Models
{
    public class FoodLocalization
    {
        public int LocaleId { get; set; }
        public string Locale { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
     }
}
