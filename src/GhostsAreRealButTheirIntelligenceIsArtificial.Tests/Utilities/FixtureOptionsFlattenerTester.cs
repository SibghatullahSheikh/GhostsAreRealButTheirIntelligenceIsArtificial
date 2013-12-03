using GhostsAreRealButTheirIntelligenceIsArtificial.Core.Utilities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
namespace GhostsAreRealButTheirIntelligenceIsArtificial.Tests.Utilities
{
    [TestClass]
    public class FixtureOptionsFlattenerTester
    {
        [TestMethod]
        public void flattener_should_give_seven_words_separated_by_spaces()
        {
            string sevenWords = FixtureOptionsFlattener.Render();
            Assert.AreEqual(sevenWords,"barricade dispel gold hyperspace key trapdoor vacuum");
        }
    }
}
