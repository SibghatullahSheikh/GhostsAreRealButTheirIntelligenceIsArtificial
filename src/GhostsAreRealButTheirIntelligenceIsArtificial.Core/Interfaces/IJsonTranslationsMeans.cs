using GhostsAreRealButTheirIntelligenceIsArtificial.Core.Objects;
namespace GhostsAreRealButTheirIntelligenceIsArtificial.Core.Interfaces
{
    public interface IJsonTranslationsMeans
    {
        Game DeserializeGame(string serialization);
        string SerializeGame(Game game);
    }
}