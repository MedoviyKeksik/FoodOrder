using FoodOrderServer.DataPresentation;
using System;
using System.Collections.Generic;

namespace FoodOrderServer.Services
{
    public class FoodService
    {
        public List<Food> Get(List<Food> list, int offset, int count)
        {
            List<Food> result = new List<Food>();
            for (int i = offset; i < Math.Min(offset + count, list.Count); i++)
            {
                result.Add(list[i]);
            }
            return result;
        }
    }
}
