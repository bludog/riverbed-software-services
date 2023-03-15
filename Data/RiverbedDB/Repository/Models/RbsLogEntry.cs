using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("rbsLogEntry")]
public partial class RbsLogEntry
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("jobId")]
    public int JobId { get; set; }

    [Column("entryTypeId")]
    public int? EntryTypeId { get; set; }

    [Column("amount")]
    public double? Amount { get; set; }

    [Column("dateAdded", TypeName = "datetime")]
    public DateTime DateAdded { get; set; }

    [Column("logDescription")]
    [StringLength(255)]
    public string? LogDescription { get; set; }
}
