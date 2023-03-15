using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("rbsStatusCode")]
public partial class RbsStatusCode
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("statusCode")]
    [StringLength(50)]
    public string StatusCode { get; set; } = null!;
}
