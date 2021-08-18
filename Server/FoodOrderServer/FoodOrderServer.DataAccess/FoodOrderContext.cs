
using System;
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
        public DbSet<FoodLocalization> FoodLocalizations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(
                new Role[]
                {
                    new Role {Id = 1, Title = "Admin", Permissions = ""}
                }
                );

            modelBuilder.Entity<Locale>().HasData(
                new Locale[]
                {
                    new Locale {Id = 1, Title = "en"},
                    new Locale {Id = 2, Title = "ru"}
                }
                );

            modelBuilder.Entity<Food>().HasData(
                new Food[]
                {
                    new Food {
                        Id = 1, 
                        Cost = 10.4, 
                        DefaultLocaleId = 1, 
                        ImageSource = "images/pizza1.jpeg", 
                        TimeToCook = TimeSpan.FromMinutes(14), 
                    }
                }
                );
            modelBuilder.Entity<FoodLocalization>().HasData(
                new FoodLocalization[]
                {
                    new FoodLocalization {Id = 1, FoodId = 1, LocaleId = 1, Title = "Pizza", Description = "So tasty pizza"},
                    new FoodLocalization {Id = 2, FoodId = 1, LocaleId = 2, Title = "Пицца", Description = "Очень вкусная пицца"}    
                }
                );
        }
    }
}
