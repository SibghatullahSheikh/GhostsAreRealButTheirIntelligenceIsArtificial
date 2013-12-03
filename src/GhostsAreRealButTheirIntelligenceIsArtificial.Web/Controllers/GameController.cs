using System.Web.Mvc;
using GhostsAreRealButTheirIntelligenceIsArtificial.Core.Interfaces;
using GhostsAreRealButTheirIntelligenceIsArtificial.Core.Objects;
using GhostsAreRealButTheirIntelligenceIsArtificial.Core.Utilities;
using GhostsAreRealButTheirIntelligenceIsArtificial.Web.Models;
using StructureMap;
namespace GhostsAreRealButTheirIntelligenceIsArtificial.Web.Controllers
{
    public class GameController : Controller
    {
        public ActionResult Index(GamePlanForGame gamePlanForGame)
        {
            Game game;
            DataTransferObject dto;
            IJsonTranslationsMeans means = ObjectFactory.GetInstance<IJsonTranslationsMeans>();  
            switch (gamePlanForGame.Act)
            {
                case "revisit":
                    try
                    {
                        game = means.DeserializeGame(gamePlanForGame.Script);
                    }
                    catch
                    {
                        return RedirectToAction("Error", "Info");
                    }
                    dto = new DataTransferObject();
                    dto.Grid = MazePreparations.DumbDownMaze(game.Maze);
                    dto.Game = gamePlanForGame.Script;
                    return View("Play", dto);
                case "revise":
                    try
                    {
                        game = means.DeserializeGame(gamePlanForGame.Script);
                    }
                    catch
                    {
                        return RedirectToAction("Error", "Info");
                    }
                    dto = new DataTransferObject();
                    dto.Grid = MazePreparations.DumbDownMaze(game.Maze);
                    dto.Game = gamePlanForGame.Script;
                    return View("Ghosts", dto);
                case "revamp":
                    try
                    {
                        game = means.DeserializeGame(gamePlanForGame.Script);
                    }
                    catch
                    {
                        return RedirectToAction("Error", "Info");
                    }
                    return View("Architect", MazePreparations.DumbDownMaze(game.Maze));
                default:
                    Grid grid = MazePreparations.MakeGrid();
                    return View("Architect", grid);
            }
        }

        public ActionResult Architect()
        {
            Grid grid = MazePreparations.MakeGrid();
            return View(grid);
        }

        public ActionResult Canned(GamePlanForGame gamePlanForGame)
        {
            Game game;
            DataTransferObject dto = new DataTransferObject();
            IJsonTranslationsMeans translationsMeans = ObjectFactory.GetInstance<IJsonTranslationsMeans>();
            IFlatFileReadingMeans fileReadingMeans = ObjectFactory.GetInstance<IFlatFileReadingMeans>();
            try
            {
                dto.Game = fileReadingMeans.GetTextByPosition(gamePlanForGame.Script);
            }
            catch
            {
                return RedirectToAction("Error", "Info");
            }
            switch (gamePlanForGame.Act)
            {
                case "play":
                    try
                    {
                        game = translationsMeans.DeserializeGame(dto.Game);
                        dto.Grid = MazePreparations.DumbDownMaze(game.Maze);
                    }
                    catch
                    {
                        return RedirectToAction("Error", "Info");
                    }
                    return View("Play", dto);
                case "see":
                    return View("Script", dto);
                default:
                    return RedirectToAction("Error", "Info");
            }
        }

        public ActionResult Ghosts(string script)
        {
            IJsonTranslationsMeans means = ObjectFactory.GetInstance<IJsonTranslationsMeans>();
            Game game = means.DeserializeGame(script);
            DataTransferObject dto = new DataTransferObject();
            dto.Grid = MazePreparations.DumbDownMaze(game.Maze);
            dto.Game = script;
            return View(dto);
        }

        public ActionResult Midway(Grid grid)
        {
            IJsonTranslationsMeans means = ObjectFactory.GetInstance<IJsonTranslationsMeans>();
            DataTransferObject dto = new DataTransferObject();
            dto.Game = MazePreparations.MakeGame(grid, means);
            return View(dto);
        }

        public ActionResult Summary(string script)
        {
            return View();
        }
	}
}