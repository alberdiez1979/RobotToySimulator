using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RobotToySimulator.Models
{
    public class RobotToySimulatorModel
    {
        public string Command { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:0.00}")]
        public int YCoordinate { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:0.00}")]
        public int XCoordinate { get; set; }

        public int FacingSelected { get; set; }

        public int RowBoard { get; set; }

        public int ColumnBoard { get; set; } 
    }
}