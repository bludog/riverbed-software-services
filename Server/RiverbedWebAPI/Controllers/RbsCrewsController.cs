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
    public class RbsCrewsController : ControllerBase
    {
        private readonly CustomerDbContext _context;

        public RbsCrewsController(CustomerDbContext context)
        {
            _context = context;
        }

        // GET: api/RbsCrews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RbsCrew>>> GetRbsCrews()
        {
          if (_context.RbsCrews == null)
          {
              return NotFound();
          }
            return await _context.RbsCrews.ToListAsync();
        }

        // GET: api/RbsCrews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RbsCrew>> GetRbsCrew(int id)
        {
          if (_context.RbsCrews == null)
          {
              return NotFound();
          }
            var rbsCrew = await _context.RbsCrews.FindAsync(id);

            if (rbsCrew == null)
            {
                return NotFound();
            }

            return rbsCrew;
        }

        // PUT: api/RbsCrews/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRbsCrew(int id, RbsCrew rbsCrew)
        {
            if (id != rbsCrew.Id)
            {
                return BadRequest();
            }

            _context.Entry(rbsCrew).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RbsCrewExists(id))
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

        // POST: api/RbsCrews
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RbsCrew>> PostRbsCrew(RbsCrew rbsCrew)
        {
          if (_context.RbsCrews == null)
          {
              return Problem("Entity set 'CustomerDbContext.RbsCrews'  is null.");
          }
            _context.RbsCrews.Add(rbsCrew);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRbsCrew", new { id = rbsCrew.Id }, rbsCrew);
        }

        // DELETE: api/RbsCrews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRbsCrew(int id)
        {
            if (_context.RbsCrews == null)
            {
                return NotFound();
            }
            var rbsCrew = await _context.RbsCrews.FindAsync(id);
            if (rbsCrew == null)
            {
                return NotFound();
            }

            _context.RbsCrews.Remove(rbsCrew);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RbsCrewExists(int id)
        {
            return (_context.RbsCrews?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
