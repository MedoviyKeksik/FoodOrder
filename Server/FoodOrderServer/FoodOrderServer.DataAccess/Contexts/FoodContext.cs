using Microsoft.EntityFrameworkCore;
using System;
using FoodOrderServer.DataPresentation;
using FoodOrderServer.DataAccess.Contexts;

namespace FoodOrderServer.DataAccess.Contexts
{
    public class FoodContext : DbContext, IGenericContext<Food>
    {
        public FoodContext()
            : base()
        {

        }
        public FoodContext(DbContextOptions<FoodContext> options)
            : base(options)
        {
        }

        public DbSet<Food> Food { get; set; }

        public DbSet<Food> GetDbSet()
        {
            return Food;
        }
    }
}
