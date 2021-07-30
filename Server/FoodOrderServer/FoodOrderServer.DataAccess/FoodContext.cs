using Microsoft.EntityFrameworkCore;
using System;
using FoodOrderServer.DataPresentation;

namespace FoodOrderServer.DataAccess
{
    public class FoodContext : DbContext
    {
        public FoodContext()
            : base()
        {

        }
        public FoodContext(DbContextOptions<FoodContext> options)
            : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=SLONIK-PC;Initial Catalog=FoodOrder;Integrated Security=True");
        }
        public DbSet<Food> Food { get; set; }
    }
}
