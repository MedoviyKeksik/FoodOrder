using FoodOrderServer.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodOrderServer.DataAccess
{
    public class FoodOrderContext : DbContext
    {
        public FoodOrderContext()
            : base()
        {

        }

        public FoodOrderContext(DbContextOptions<FoodOrderContext> options)
            : base(options)
        {

        }

        public DbSet<Food> Food { get; set; }
        public DbSet<FoodInOrder> FoodInOrders { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Locale> Locales { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UsersInRoles> UsersInRoles { get; set; }
        public DbSet<FoodLocalization> FoodLocalizations { get; set; }
    }
}
