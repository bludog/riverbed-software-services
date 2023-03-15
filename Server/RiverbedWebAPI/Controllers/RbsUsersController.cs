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
    public class RbsUsersController : ControllerBase
    {
        private readonly CustomerDbContext _context;

        public RbsUsersController(CustomerDbContext context)
        {
            _context = context;
        }

        // GET: api/RbsUsers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RbsUser>>> GetRbsUsers()
        {
          if (_context.RbsUsers == null)
          {
              return NotFound();
          }
            return await _context.RbsUsers.ToListAsync();
        }

        // GET: api/RbsUsers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RbsUser>> GetRbsUser(int id)
        {
          if (_context.RbsUsers == null)
          {
              return NotFound();
          }
            var rbsUser = await _context.RbsUsers.FindAsync(id);

            if (rbsUser == null)
            {
                return NotFound();
            }

            return rbsUser;
        }

        // PUT: api/RbsUsers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRbsUser(int id, RbsUser rbsUser)
        {
            if (id != rbsUser.Id)
            {
                return BadRequest();
            }

            _context.Entry(rbsUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RbsUserExists(id))
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

        // POST: api/RbsUsers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RbsUser>> PostRbsUser(RbsUser rbsUser)
        {
          if (_context.RbsUsers == null)
          {
              return Problem("Entity set 'CustomerDbContext.RbsUsers'  is null.");
          }
            _context.RbsUsers.Add(rbsUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRbsUser", new { id = rbsUser.Id }, rbsUser);
        }

        // DELETE: api/RbsUsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRbsUser(int id)
        {
            if (_context.RbsUsers == null)
            {
                return NotFound();
            }
            var rbsUser = await _context.RbsUsers.FindAsync(id);
            if (rbsUser == null)
            {
                return NotFound();
            }

            _context.RbsUsers.Remove(rbsUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RbsUserExists(int id)
        {
            return (_context.RbsUsers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
