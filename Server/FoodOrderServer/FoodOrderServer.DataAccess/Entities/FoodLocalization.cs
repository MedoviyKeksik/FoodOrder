using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Entities
{
    public class FoodLocalization : BaseEntity
    {
        public FoodLocalization()
            : base()
        {
        }

        private FoodLocalization(ILazyLoader lazyLoader)
            : base(lazyLoader)
        {
        }

        [Required]
        [MaxLength(150)]
        public string Title { get; set; }
        public string Description { get; set; }

        [Required]
        public int FoodId { get; set; }
        private Food _food;
        public Food Food { 
            get => LazyLoader.Load(this, ref _food); 
            set => _food = value; 
        }

        [Required]
        public int LocaleId { get; set; }
        private Locale _locale;
        public Locale Locale { 
            get => LazyLoader.Load(this, ref _locale); 
            set => _locale = value; 
        }
    }
}
