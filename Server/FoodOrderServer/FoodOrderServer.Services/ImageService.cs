using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using FoodOrderServer.Services.Interfaces;
using Microsoft.AspNetCore.StaticFiles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services
{
    public class ImageService : IImageService
    {
        private BlobServiceClient _blobServiceClient;

        public ImageService(BlobServiceClient blobServiceClient)
        {
            _blobServiceClient = blobServiceClient;
        }
        public async Task<BlobDownloadResult> GetImageAsync(string filename)
        {
            var imageContainer = _blobServiceClient.GetBlobContainerClient("foodimages");
            var blobClient = imageContainer.GetBlobClient(filename);
            var blobDownloadInfo = await blobClient.DownloadContentAsync();
            return blobDownloadInfo.Value;
        }

        public async Task UploadImage(string filename, byte[] content)
        {
            var imageContainer = _blobServiceClient.GetBlobContainerClient("foodimages");
            var blobClient = imageContainer.GetBlobClient(filename);
            string contentType;
            if (!new FileExtensionContentTypeProvider().TryGetContentType(filename, out contentType))
            {
                contentType = "application/octet-stream";
            }
            await blobClient.UploadAsync(BinaryData.FromBytes(content), new BlobUploadOptions { HttpHeaders = new BlobHttpHeaders { ContentType = contentType } });
        }
    }
}
