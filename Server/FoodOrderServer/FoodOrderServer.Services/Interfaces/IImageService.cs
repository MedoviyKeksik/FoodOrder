using Azure.Storage.Blobs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services.Interfaces
{
    public interface IImageService
    {
        Task<BlobDownloadResult> GetImageAsync(string name);
        Task UploadImage(string fileName, byte[] content);

    }
}
