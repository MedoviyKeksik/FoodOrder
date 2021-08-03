using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrderServer.DataPresentation.Models;

namespace FoodOrderServer.DataAccess.Contexts
{
    public class OrderContext : DbContext, IGenericContext<Order>
    { 
        public OrderContext()
            : base()
        {

        }
        public OrderContext(DbContextOptions<OrderContext> options)
            : base(options)
        {
        }
        public DbSet<Order> Order { get; set; }

        public DbSet<Order> GetDbSet()
        {
            return Order;
        }
    }
}
