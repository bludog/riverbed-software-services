using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Business.Server.Data.Repository;
using Business.Server.Data.Repository.Models;

namespace RiverbedWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RbsStatusCodesController : ControllerBase
    {
        private readonly CustomerDbContext _context;

        public RbsStatusCodesController(CustomerDbContext context)
        {
            _context = context;
        }

        // GET: api/RbsStatusCodes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RbsStatusCode>>> GetRbsStatusCodes()
        {
          if (_context.RbsStatusCodes == null)
          {
              return NotFound();
          }
            return await _context.RbsStatusCodes.ToListAsync();
        }

        // GET: api/RbsStatusCodes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RbsStatusCode>> GetRbsStatusCode(int id)
        {
          if (_context.RbsStatusCodes == null)
          {
              return NotFound();
          }
            var rbsStatusCode = await _context.RbsStatusCodes.FindAsync(id);

            if (rbsStatusCode == null)
            {
                return NotFound();
            }

            return rbsStatusCode;
        }

        // PUT: api/RbsStatusCodes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRbsStatusCode(int id, RbsStatusCode rbsStatusCode)
        {
            if (id != rbsStatusCode.Id)
            {
                return BadRequest();
            }

            _context.Entry(rbsStatusCode).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RbsStatusCodeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RbsStatusCodes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RbsStatusCode>> PostRbsStatusCode(RbsStatusCode rbsStatusCode)
        {
          if (_context.RbsStatusCodes == null)
          {
              return Problem("Entity set 'CustomerDbContext.RbsStatusCodes'  is null.");
          }
            _context.RbsStatusCodes.Add(rbsStatusCode);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRbsStatusCode", new { id = rbsStatusCode.Id }, rbsStatusCode);
        }

        // DELETE: api/RbsStatusCodes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRbsStatusCode(int id)
        {
            if (_context.RbsStatusCodes == null)
            {
                return NotFound();
            }
            var rbsStatusCode = await _context.RbsStatusCodes.FindAsync(id);
            if (rbsStatusCode == null)
            {
                return NotFound();
            }

            _context.RbsStatusCodes.Remove(rbsStatusCode);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RbsStatusCodeExists(int id)
        {
            return (_context.RbsStatusCodes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
