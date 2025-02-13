import { Sentiment } from "@/types/sentiment";

function createSentimentDescription(sentiment: Sentiment, isEmotionStrong: boolean) {
  switch (sentiment) {
    case "POSITIVE":
      return isEmotionStrong ? "To bardzo pozytywny tekst!" : "Ten tekst jest prawdopodobnie pozytywny.";
    case "NEGATIVE":
      return isEmotionStrong ? "Wow! Ten tekst jest ostry!" : "Ten tekst wydaje się być negatywny.";
    case "NEUTRAL":
      return "Ten tekst wydaje się być neutralny.";
  }
}

export { createSentimentDescription };
