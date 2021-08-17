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
        Task<List<Order>> GetByUser(int userId);
        Task<Order> GetById(int orderId);
        Task Add(Order order);
        Task Update(Order order);
        Task Delete(int orderId);
    }
}
