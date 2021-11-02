using FoodOrderServer.DataPresentation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services.Interfaces
{
    public interface IOrdersService
    {
        Task<PartialOrderModel> GetByUser(int userId);
        Task<Order> GetById(int orderId);
        Task Add(Order order);
        Task Update(Order order);
        Task Delete(int orderId);
    }
}
