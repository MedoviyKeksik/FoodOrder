using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Entities
{
    public class Locale : BaseEntity
    {
        [MaxLength(20)]
        [Required]
        public string Title { get; set; }
    }
}
