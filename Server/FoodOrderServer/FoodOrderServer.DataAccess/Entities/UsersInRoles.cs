using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Entities
{
    public class UsersInRoles : BaseEntity
    {
        public int UserId { get; set; }
        public int RoleId { get; set; }
    }
}
