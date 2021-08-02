using System;

namespace FoodOrderServer.DataPresentation
{
    public class Food
    {
        public int Id { get; set; }
        public TimeSpan TimeToCook { get; set; }
        public float Cost { get; set; }
        public int DefaultLocaleId { get; set; }
    }
}
