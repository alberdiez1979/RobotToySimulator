using RobotToySimulator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RobotToySimulator.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            RobotToySimulatorModel model = new RobotToySimulatorModel();
            model.ColumnBoard = 5;
            model.RowBoard = 5;
            return View(model);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}