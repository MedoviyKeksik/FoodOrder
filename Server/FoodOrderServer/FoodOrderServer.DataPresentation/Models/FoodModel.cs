using System;

namespace FoodOrderServer.DataPresentation.Models
{
    public class Food
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public TimeSpan TimeToCook { get; set; }
        public string ImageSource { get; set; }
        public double Cost { get; set; }
    }
}
