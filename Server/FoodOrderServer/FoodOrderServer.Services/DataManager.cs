using System;
using System.Collections.Generic;

namespace FoodOrderServer.Services
{
    public class DataManager<T>
    {
        public List<T> Get(List<T> list, int offset, int count)
        {
            List<T> result = new List<T>();
            for (int i = offset; i < Math.Min(offset + count, list.Count); i++)
            {
                result.Add(list[i]);
            }
            return result;
        }
    }
}
