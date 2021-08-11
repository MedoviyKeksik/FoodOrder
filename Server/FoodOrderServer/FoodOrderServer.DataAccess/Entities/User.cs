using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodOrderServer.DataAccess.Entities
{
    public class User : BaseEntity
    {
        public User()
            : base()
        {
        }

        private User(ILazyLoader lazyLoader)
            : base(lazyLoader)
        {
        }
        
        [MaxLength(100)]
        public string Name { get; set; }
        
        [MaxLength(100)]
        public string Surname { get; set; }
        
        [MaxLength(250)]
        [EmailAddress]
        public string Email { get; set; }
        
        [MaxLength(50)]
        [Phone]
        public string Phone { get; set; }

        public string Password { get; set; }
        public string RefreshToken { get; set; }
        public DateTime ExpireDate { get; set; }

        private ICollection<Role> _roles;
        public ICollection<Role> Roles { 
            get => LazyLoader.Load(this, ref _roles); 
            set => _roles = value; 
        } 
    }
}
