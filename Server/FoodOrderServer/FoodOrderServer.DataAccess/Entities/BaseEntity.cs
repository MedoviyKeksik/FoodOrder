using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Entities
{
    public class BaseEntity
    {
        public BaseEntity()
        {
        }

        protected BaseEntity(ILazyLoader lazyLoader)
        {
            LazyLoader = lazyLoader;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        protected ILazyLoader LazyLoader { get; set; }
    }
}
