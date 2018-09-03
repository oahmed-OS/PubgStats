using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PubgStats.Models;

namespace PubgStats.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            PlayerStatsModel player = new PlayerStatsModel();
            return View(player);
        }

        [HttpPost]
        public IActionResult Index([Bind(include: "PlayerName")] PlayerStatsModel player)
        {
            //call stats api and return model

            return View(player);
        }
    }
}
