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
    public class RbsEntryTypesController : ControllerBase
    {
        private readonly CustomerDbContext _context;

        public RbsEntryTypesController(CustomerDbContext context)
        {
            _context = context;
        }

        // GET: api/RbsEntryTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RbsEntryType>>> GetRbsEntryTypes()
        {
          if (_context.RbsEntryTypes == null)
          {
              return NotFound();
          }
            return await _context.RbsEntryTypes.ToListAsync();
        }

        // GET: api/RbsEntryTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RbsEntryType>> GetRbsEntryType(int id)
        {
          if (_context.RbsEntryTypes == null)
          {
              return NotFound();
          }
            var rbsEntryType = await _context.RbsEntryTypes.FindAsync(id);

            if (rbsEntryType == null)
            {
                return NotFound();
            }

            return rbsEntryType;
        }

        // PUT: api/RbsEntryTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRbsEntryType(int id, RbsEntryType rbsEntryType)
        {
            if (id != rbsEntryType.Id)
            {
                return BadRequest();
            }

            _context.Entry(rbsEntryType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RbsEntryTypeExists(id))
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

        // POST: api/RbsEntryTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RbsEntryType>> PostRbsEntryType(RbsEntryType rbsEntryType)
        {
          if (_context.RbsEntryTypes == null)
          {
              return Problem("Entity set 'CustomerDbContext.RbsEntryTypes'  is null.");
          }
            _context.RbsEntryTypes.Add(rbsEntryType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRbsEntryType", new { id = rbsEntryType.Id }, rbsEntryType);
        }

        // DELETE: api/RbsEntryTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRbsEntryType(int id)
        {
            if (_context.RbsEntryTypes == null)
            {
                return NotFound();
            }
            var rbsEntryType = await _context.RbsEntryTypes.FindAsync(id);
            if (rbsEntryType == null)
            {
                return NotFound();
            }

            _context.RbsEntryTypes.Remove(rbsEntryType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RbsEntryTypeExists(int id)
        {
            return (_context.RbsEntryTypes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
