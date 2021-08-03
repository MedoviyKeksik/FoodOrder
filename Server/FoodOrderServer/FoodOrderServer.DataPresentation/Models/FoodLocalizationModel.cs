using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataPresentation.Models
{
    class FoodLocalization
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int FoodId { get; set; }
        public int LocaleId { get; set; }
    }
}
