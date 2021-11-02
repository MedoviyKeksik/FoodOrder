using FoodOrderServer.DataPresentation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services.Interfaces
{
    public interface IFoodService
    {
        Task<PartialFood> GetItems(string locale, int offset, int count);
        Task<FullFood> GetById(int id);
        Task Add(FoodInfoModel food);
        Task Delete(int id);
        Task Update(FullFood food);
    }
}
