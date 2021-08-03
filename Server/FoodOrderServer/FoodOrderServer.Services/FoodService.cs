using FoodOrderServer.DataAccess;
using FoodOrderServer.DataPresentation;
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

        public List<Food> Get(string locale, int offset = 0, int count = int.MaxValue)
        {
            List<Food> result = new List<Food>();
            var list = _db.Food.GetAll().ToList();
            for (int i = offset; i < Math.Min(offset + count, list.Count); i++)
            {
                result.Add(list[i]);
            }
            return result;
        }
    }
}
