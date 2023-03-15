using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("rbsUser")]
public partial class RbsUser
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("firstName")]
    [StringLength(50)]
    public string? FirstName { get; set; }

    [Column("lastName")]
    [StringLength(50)]
    public string LastName { get; set; } = null!;

    [Column("dateAdded", TypeName = "datetime")]
    public DateTime DateAdded { get; set; }

    [Column("dateLastAccessed", TypeName = "datetime")]
    public DateTime DateLastAccessed { get; set; }

    [Column("token")]
    [StringLength(50)]
    public string? Token { get; set; }

    [Required]
    [Column("isActive")]
    public bool? IsActive { get; set; }

    [Column("emailAddress")]
    [StringLength(50)]
    public string EmailAddress { get; set; } = null!;

    [InverseProperty("Parent")]
    public virtual ICollection<RbsJob> RbsJobs { get; } = new List<RbsJob>();
}
