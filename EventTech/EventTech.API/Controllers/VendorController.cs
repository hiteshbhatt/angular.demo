using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventTech.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        static List<Vendor> Vendors = new List<Vendor>
        {
           new Vendor { Id = 1, Name = "Catering Co.", ServiceType = "Catering", Description = "Provides food and beverages." },
           new Vendor { Id = 2, Name = "Sound Masters", ServiceType = "Audio Equipment", Description = "Offers sound systems and technical support." },
           new Vendor { Id = 3, Name = "Decor Deluxe", ServiceType = "Decoration", Description = "Specializes in event decoration and themes." }

        };
        [HttpGet]
        public IActionResult GetVendors()
        {
           
            return Ok(Vendors);
        }
        [HttpGet("{id}")]
        public IActionResult GetVendorById(int id)
        {
            var vendor = Vendors.FirstOrDefault(v => v.Id == id);
            if (vendor == null)
            {
                return NotFound();
            }
            return Ok(vendor);
        }

        [HttpPost]
        public IActionResult CreateVendor([FromBody] Vendor newVendor)
        {
            newVendor.Id = Vendors.Max(v => v.Id) + 1;
            Vendors.Add(newVendor);
            return CreatedAtAction(nameof(GetVendorById), new { id = newVendor.Id }, newVendor);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateVendor(int id, [FromBody] Vendor updatedVendor)
        {
            var vendor = Vendors.FirstOrDefault(v => v.Id == id);
            if (vendor == null)
            {
                return NotFound();
            }
            vendor.Name = updatedVendor.Name;
            vendor.ServiceType = updatedVendor.ServiceType;
            vendor.Description = updatedVendor.Description;
            return NoContent();
        }
    }
}
