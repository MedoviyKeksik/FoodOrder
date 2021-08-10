using FoodOrderServer.DataAccess;
using FoodOrderServer.DataPresentation.Models;
using System.Linq;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FoodOrderServer.Services
{
    public class FoodService : BaseService
    {
        public FoodService(IUnitOfWork unitOfWork)
            : base(unitOfWork)
        {
        }

        private int? GetLocaleIdByName(string locale)
        {
            return _db.Locales.GetAll().FirstOrDefault(lang => lang.Title.Equals(locale))?.Id;
        }

        public async Task<List<Food>> Get(string locale, int offset, int count)
        {
            if (count <= 0) count = int.MaxValue;
            if (string.IsNullOrEmpty(locale))
            {
                var food = _db.Food.GetAll().Select(food =>
                    new Food
                    {
                        Id = food.Id,
                        Cost = food.Cost,
                        TimeToCook = food.TimeToCook,
                        Title = food.Localizations.First(lang => food.DefaultLocaleId == lang.LocaleId).Title,
                        Description = food.Localizations.First(lang => food.DefaultLocaleId == lang.LocaleId).Description
                    }).Skip(offset).Take(count);
                return await food.ToListAsync();
            } 
            else
            {
                var food = _db.Food.GetAll().Select(food =>
                    new Food
                    {
                        Id = food.Id,
                        Cost = food.Cost,
                        TimeToCook = food.TimeToCook,
                        Title = food.Localizations.First(lang => locale == lang.Locale.Title).Title,
                        Description = food.Localizations.First(lang => locale == lang.Locale.Title).Description
                    }).Skip(offset).Take(count); ;
                return await food.ToListAsync();
            }
        }

        public async Task<FullFood> GetById(int id)
        {
            var food = await _db.Food.Get(id);
            if (food == null) return null;
            var localizations = _db.FoodLocalizations.GetAll()
                .Where(locale => locale.FoodId == id)
                .Select(locale =>
                    new FoodLocalization 
                    {
                        Title = locale.Title,
                        Description = locale.Description,
                        Locale = locale.Locale.Title
                    }).ToListAsync();
            return new FullFood
            {
                Id = food.Id,
                TimeToCook = food.TimeToCook,
                Cost = food.Cost,
                Locales = await localizations,
                DefaultLocale = (await _db.Locales.Get(food.DefaultLocaleId)).Title
            };
        }

        public async Task Add(FullFood food) 
        {
            var localizations = food.Locales.Select(locale => new DataAccess.Entities.FoodLocalization
            {
                FoodId = food.Id,
                LocaleId = GetLocaleIdByName(locale.Locale).Value,
                Title = locale.Title,
                Description = locale.Description
            });
            await _db.Food.Add(new DataAccess.Entities.Food
            {
                Cost = food.Cost,
                TimeToCook = food.TimeToCook,
                DefaultLocaleId = GetLocaleIdByName(food.DefaultLocale).Value,
                Localizations = localizations.ToList()
            });
            await _db.Save();
        }

        public async Task Delete(int id)
        {
            _db.Food.Delete(id);
            await _db.Save();
        }

        public async Task Update(FullFood food)
        {
            var editFood = _db.Food.Get(food.Id).Result;
            if (editFood == null) return;

            editFood.Cost = food.Cost;
            editFood.DefaultLocaleId = GetLocaleIdByName(food.DefaultLocale) ?? editFood.DefaultLocaleId;
            editFood.TimeToCook = food.TimeToCook;
            if (food.Locales != null)
            {
                food.Locales.ForEach(locale =>
                {
                    var tmp = editFood.Localizations.FirstOrDefault(lz => lz.Locale.Title == locale.Locale);
                    if (tmp == null)
                    {
                        editFood.Localizations.Add(new DataAccess.Entities.FoodLocalization
                        {
                            FoodId = food.Id,
                            LocaleId = GetLocaleIdByName(locale.Locale).Value,
                            Title = locale.Title,
                            Description = locale.Description
                        });
                    }
                    else
                    {
                        tmp.Title = locale.Title ?? tmp.Title;
                        tmp.Description = locale.Description ?? tmp.Description;
                    }
                });
            }
            _db.Food.Update(editFood);
            await _db.Save();
        }
    }
}
