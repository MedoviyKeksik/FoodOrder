using FoodOrderServer.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace FoodOrderServer.Controllers
{
    [Route("api/images")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IImageService _imageService;
        public ImageController(IImageService imageService)
        {
            _imageService = imageService;
        }

        [HttpGet]
        [Route("{filename}")]
        public async Task<IActionResult> GetImage(string filename)
        {
            var image = await _imageService.GetImageAsync(filename);
            return File(image.Content.ToArray(), image.Details.ContentType);
        }
    }
}
