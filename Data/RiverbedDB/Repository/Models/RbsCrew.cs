using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("rbsCrew")]
public partial class RbsCrew
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("crewName")]
    [StringLength(50)]
    public string CrewName { get; set; } = null!;

    [InverseProperty("Crew")]
    public virtual ICollection<RbsJob> RbsJobs { get; } = new List<RbsJob>();
}
