using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodOrderServer.DataAccess.Entities
{
    public class Food : BaseEntity
    {
        public Food()
            : base()
        {
        }

        private Food(ILazyLoader lazyLoader)
            : base(lazyLoader)
        {
        }
        
        [Required]
        public TimeSpan TimeToCook { get; set; }

        [Required]
        public double Cost { get; set; }

        public int DefaultLocaleId { get; set; }
        public string ImageSource { get; set; }
        
        private ICollection<FoodLocalization> _localizations;
        public ICollection<FoodLocalization> Localizations
        {
            get => LazyLoader.Load(this, ref _localizations);
            set => _localizations = value;
        }
               
    }
}
