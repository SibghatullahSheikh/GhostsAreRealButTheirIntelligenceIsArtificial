using System.Web.Mvc;
using GhostsAreRealButTheirIntelligenceIsArtificial.Core.Interfaces;
using StructureMap;
namespace GhostsAreRealButTheirIntelligenceIsArtificial.Web.Controllers
{
    public class InfoController : Controller
    {
        public ActionResult Index()
        {
            IFlatFileReadingMeans means = ObjectFactory.GetInstance<IFlatFileReadingMeans>();
            ViewBag.Version = means.GetVersion();
            return View();
        }

        public ActionResult Error()
        {
            return View();
        }
	}
}