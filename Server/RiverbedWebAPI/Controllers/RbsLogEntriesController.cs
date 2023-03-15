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
    public class RbsLogEntriesController : ControllerBase
    {
        private readonly CustomerDbContext _context;

        public RbsLogEntriesController(CustomerDbContext context)
        {
            _context = context;
        }

        // GET: api/RbsLogEntries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RbsLogEntry>>> GetRbsLogEntries()
        {
          if (_context.RbsLogEntries == null)
          {
              return NotFound();
          }
            return await _context.RbsLogEntries.ToListAsync();
        }

        // GET: api/RbsLogEntries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RbsLogEntry>> GetRbsLogEntry(int id)
        {
          if (_context.RbsLogEntries == null)
          {
              return NotFound();
          }
            var rbsLogEntry = await _context.RbsLogEntries.FindAsync(id);

            if (rbsLogEntry == null)
            {
                return NotFound();
            }

            return rbsLogEntry;
        }

        // PUT: api/RbsLogEntries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRbsLogEntry(int id, RbsLogEntry rbsLogEntry)
        {
            if (id != rbsLogEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(rbsLogEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RbsLogEntryExists(id))
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

        // POST: api/RbsLogEntries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RbsLogEntry>> PostRbsLogEntry(RbsLogEntry rbsLogEntry)
        {
          if (_context.RbsLogEntries == null)
          {
              return Problem("Entity set 'CustomerDbContext.RbsLogEntries'  is null.");
          }
            _context.RbsLogEntries.Add(rbsLogEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRbsLogEntry", new { id = rbsLogEntry.Id }, rbsLogEntry);
        }

        // DELETE: api/RbsLogEntries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRbsLogEntry(int id)
        {
            if (_context.RbsLogEntries == null)
            {
                return NotFound();
            }
            var rbsLogEntry = await _context.RbsLogEntries.FindAsync(id);
            if (rbsLogEntry == null)
            {
                return NotFound();
            }

            _context.RbsLogEntries.Remove(rbsLogEntry);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RbsLogEntryExists(int id)
        {
            return (_context.RbsLogEntries?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
