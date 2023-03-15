using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

public partial class BasicCompanySetting
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    public double PainterRate { get; set; }

    public double CompanyRate { get; set; }

    public int MaterialMarkupPercent { get; set; }

    [StringLength(50)]
    public string CompanyName { get; set; } = null!;
}
