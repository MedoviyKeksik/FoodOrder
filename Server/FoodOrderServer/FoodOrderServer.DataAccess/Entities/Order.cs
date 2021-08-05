using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Entities
{

    public enum OrderStatus
    {
        Created, 
        Queue,
        Cooking,
        Ready,
        Recieved,
        Cancelled
    }

    public class Order : BaseEntity
    {
        public Order()
            : base()
        {
        }

        private Order(ILazyLoader lazyLoader)
            : base(lazyLoader)
        {
        }

        [Required]
        public int UserId { get; set; }
        private User _user;
        public User User
        {
            get => LazyLoader.Load(this, ref _user);
            set => _user = value;
        }

        [Required]
        public DateTime Time { get; set; }

        [Required]
        public OrderStatus Status { get; set; }
    }
}
