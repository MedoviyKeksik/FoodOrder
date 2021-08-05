using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Entities
{
    public class FoodLocalization : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int FoodId { get; set; }
        public int LocaleId { get; set; }
    }
}
