using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("BasicJob")]
public partial class BasicJob
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [StringLength(50)]
    public string JobName { get; set; } = null!;

    [StringLength(50)]
    public string? Description { get; set; }

    public int CustId { get; set; }

    public int PaintLevelId { get; set; }
}
