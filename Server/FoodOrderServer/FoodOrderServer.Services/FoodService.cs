using FoodOrderServer.DataAccess;
using FoodOrderServer.DataPresentation.Models;
using System.Linq;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace FoodOrderServer.Services
{
    public class FoodService : BaseService
    {
        public FoodService(IUnitOfWork unitOfWork)
            : base(unitOfWork)
        {
        }

        private static List<T> SubList<T>(List<T> list, int offset, int count)
        {
            List<T> result = new List<T>();
            for (int i = offset; i < Math.Min(offset + count, list.Count); i++)
            {
                result.Add(list[i]);
            }
            return result;
        }

        public List<Food> Get(string locale, int offset, int count)
        {
            if (count <= 0) count = int.MaxValue;
            if (string.IsNullOrEmpty(locale))
            {
                var query = _db.Food.GetAll().Select(food =>
                    new Food
                    {
                        Id = food.Id,
                        Cost = food.Cost,
                        TimeToCook = food.TimeToCook,
                        Title = food.Localizations.First(lang => food.DefaultLocaleId == lang.LocaleId).Title,
                        Description = food.Localizations.First(lang => food.DefaultLocaleId == lang.LocaleId).Description
                    }).ToListAsync();
                return SubList<Food>(query.Result, offset, count);
            } 
            else
            {
                var query = _db.Food.GetAll().Select(food =>
                    new Food
                    {
                        Id = food.Id,
                        Cost = food.Cost,
                        TimeToCook = food.TimeToCook,
                        Title = food.Localizations.First(lang => locale == lang.Locale.Title).Title,
                        Description = food.Localizations.First(lang => locale == lang.Locale.Title).Description
                    }).ToListAsync();
                return SubList<Food>(query.Result, offset, count);
            }
        }

        public Food GetById(int id, string locale)
        {

            var food = _db.Food.Get(id).Result;
            DataAccess.Entities.FoodLocalization localization;
            if (string.IsNullOrEmpty(locale)) 
            {
                localization = food.Localizations.First(lang => food.DefaultLocaleId == lang.LocaleId);
            }
            else
            {
                localization = food.Localizations.First(lang => locale == lang.Locale.Title);
            }
            return new Food
            {
                Id = food.Id,
                TimeToCook = food.TimeToCook,
                Cost = food.Cost,
                Title = localization.Title,
                Description = localization.Description
            };
        }

        public void Add() 
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            _db.Food.Delete(id);
        }

        public void Update(int id, Food food)
        {
            throw new NotImplementedException();
        }
    }
}
