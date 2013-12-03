using System;
using GhostsAreRealButTheirIntelligenceIsArtificial.Core.Interfaces;
namespace GhostsAreRealButTheirIntelligenceIsArtificial.Means
{
    public class FlatFileReadingMeans : IFlatFileReadingMeans
    {
        public string GetVersion()
        {
            return ReadFromFlatFile()[0];
        }

        public string GetTextByPosition(string encoding)
        {
            int position = Convert.ToInt32(encoding);
            return ReadFromFlatFile()[position];
        }

        private string[] ReadFromFlatFile()
        {
            string path = System.AppDomain.CurrentDomain.BaseDirectory + "bin\\ApplicationNotes.txt";
            string text = System.IO.File.ReadAllText(path);
            return text.Split(new string[] { "\r\n", "\n" }, StringSplitOptions.None);
        }
    }
}