using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.ComponentModel.DataAnnotations;

namespace FoodOrderServer.DataAccess.Entities
{
    public class FoodInOrder : BaseEntity
    {
        public FoodInOrder()
            : base()
        {
        }

        private FoodInOrder(ILazyLoader lazyLoader) 
            : base(lazyLoader)
        {
        }

        [Required]
        public int FoodId { get; set; }
        private Food _food;
        public Food Food { 
            get => LazyLoader.Load(this, ref _food); 
            set => _food = value; 
        }

        [Required]
        public int OrderId { get; set; }
        private Order _order;
        public Order Order { 
            get => LazyLoader.Load(this, ref _order); 
            set => _order = value; 
        }

        [Required]
        public int Count { get; set; }
    }
}
