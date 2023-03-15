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
    public class RbsJobsController : ControllerBase
    {
        private readonly CustomerDbContext _context;

        public RbsJobsController(CustomerDbContext context)
        {
            _context = context;
        }

        // GET: api/RbsJobs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RbsJob>>> GetRbsJobs()
        {
          if (_context.RbsJobs == null)
          {
              return NotFound();
          }
            return await _context.RbsJobs.ToListAsync();
        }

        // GET: api/RbsJobs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RbsJob>> GetRbsJob(int id)
        {
          if (_context.RbsJobs == null)
          {
              return NotFound();
          }
            var rbsJob = await _context.RbsJobs.FindAsync(id);

            if (rbsJob == null)
            {
                return NotFound();
            }

            return rbsJob;
        }

        // PUT: api/RbsJobs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRbsJob(int id, RbsJob rbsJob)
        {
            if (id != rbsJob.Id)
            {
                return BadRequest();
            }

            _context.Entry(rbsJob).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RbsJobExists(id))
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

        // POST: api/RbsJobs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RbsJob>> PostRbsJob(RbsJob rbsJob)
        {
          if (_context.RbsJobs == null)
          {
              return Problem("Entity set 'CustomerDbContext.RbsJobs'  is null.");
          }
            _context.RbsJobs.Add(rbsJob);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRbsJob", new { id = rbsJob.Id }, rbsJob);
        }

        // DELETE: api/RbsJobs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRbsJob(int id)
        {
            if (_context.RbsJobs == null)
            {
                return NotFound();
            }
            var rbsJob = await _context.RbsJobs.FindAsync(id);
            if (rbsJob == null)
            {
                return NotFound();
            }

            _context.RbsJobs.Remove(rbsJob);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RbsJobExists(int id)
        {
            return (_context.RbsJobs?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
