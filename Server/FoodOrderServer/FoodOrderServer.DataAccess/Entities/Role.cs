using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Entities
{
    public class Role : BaseEntity
    {
        public Role()
            : base()
        {
        }

        private Role(ILazyLoader lazyLoader)
            : base(lazyLoader)
        {
        }

        [MaxLength(100)]
        [Required]
        public string Title { get; set; }

        [Required]
        public string Permissions { get; set; }

        private ICollection<User> _users;
        public ICollection<User> Users
        {
            get => LazyLoader.Load(this, ref _users);
            set => _users = value;
        }
    }
}
