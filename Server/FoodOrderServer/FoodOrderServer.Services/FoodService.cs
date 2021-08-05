using FoodOrderServer.DataAccess;
using FoodOrderServer.DataPresentation.Models;
using System.Linq;
using System;
using System.Collections.Generic;

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
                List<Food> result = (from food in _db.Food.GetAll()
                                     join lang in _db.Locales.GetAll() on food.DefaultLocaleId equals lang.Id
                                     join localization in _db.FoodLocalizations.GetAll() on food.Id equals localization.FoodId
                                     where localization.LocaleId == food.DefaultLocaleId
                                     select new Food {
                                        Id = food.Id,
                                        Title = localization.Title,
                                        Description = localization.Description,
                                        Cost = food.Cost,
                                        TimeToCook = food.TimeToCook
                                     }).ToList();
                return SubList<Food>(result, offset, count);
            } else
            {
                List<Food> result = (from food in _db.Food.GetAll()
                                     join localization in _db.FoodLocalizations.GetAll() on food.Id equals localization.FoodId
                                     join lang in _db.Locales.GetAll() on localization.LocaleId equals lang.Id
                                     where lang.Title == locale
                                     select new Food
                                     {
                                         Id = food.Id,
                                         Title = localization.Title,
                                         Description = localization.Description,
                                         Cost = food.Cost,
                                         TimeToCook = food.TimeToCook
                                     }).ToList();
                return SubList<Food>(result, offset, count);
            }
        }

        public Food GetById(string locale, int id)
        {
            throw new NotFiniteNumberException();
        }
    }
}
