using System;
using System.ComponentModel.DataAnnotations;

namespace FoodOrderServer.DataAccess.Entities
{
    public class Food : BaseEntity
    {
        [Required]
        public TimeSpan TimeToCook { get; set; }
        [Required]
        public float Cost { get; set; }
        public int DefaultLocaleId { get; set; }
    }
}
