using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("BasicRoom")]
public partial class BasicRoom
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    public int JobId { get; set; }

    public int Length { get; set; }

    public int Width { get; set; }

    public int Height { get; set; }

    public int Doors { get; set; }

    public int Windows { get; set; }

    public int CrownMoldingLength { get; set; }

    [Required]
    public bool? IncludeCeiling { get; set; }

    [Required]
    public bool? IncludeBaseboards { get; set; }

    public bool IncludeAccentWall { get; set; }

    public bool IncludeCrownMolding { get; set; }

    public double ExtraTime { get; set; }

    public double PrepSetupCleanTime { get; set; }

    public int PaintLevelId { get; set; }

    public int WallPaintGallons { get; set; }

    public int CeilingPaintGallons { get; set; }

    public int TrimAndDoorGallons { get; set; }

    [Required]
    public bool? IncludeWalls { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string RoomName { get; set; } = null!;
}
