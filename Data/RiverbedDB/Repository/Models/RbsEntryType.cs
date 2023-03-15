using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("rbsEntryType")]
public partial class RbsEntryType
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("entryType")]
    [StringLength(50)]
    public string EntryType { get; set; } = null!;
}

