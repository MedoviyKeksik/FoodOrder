using System;

namespace FoodOrderServer.DataAccess.Entities
{
    public class FoodInOrder : BaseEntity
    {
        public int FoodId { get; set; }
        public int OrderId { get; set; }
        public int Count { get; set; }
    }
}
