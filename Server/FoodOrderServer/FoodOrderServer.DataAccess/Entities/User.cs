using System;
using System.ComponentModel.DataAnnotations;

namespace FoodOrderServer.DataAccess.Entities
{
    public class User : BaseEntity
    {
        [MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(100)]
        public string Surname { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        [Phone]
        public string Phone { get; set; }
        public string Password { get; set; }
    }
}
