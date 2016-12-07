using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TransmissionUI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index1()
        {
            return View();
        }
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
    }
}