using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("BreakEvenType")]
public partial class BreakEvenType
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [StringLength(50)]
    public string BreakEvenTypeDesc { get; set; } = null!;
}
