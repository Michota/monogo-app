import { Sentiment } from "@/types/sentiment";

function createSentimentDescription(sentiment: Sentiment, isEmotionStrong: boolean) {
  switch (sentiment) {
    case "POSITIVE":
      return isEmotionStrong ? "This is a very positive text" : "This text is likely positive";
    case "NEGATIVE":
      return isEmotionStrong ? "Woah! This text is harsh" : "This text seems to be negative";
    case "NEUTRAL":
      return "This text seems to be neutral";
  }
}

export { createSentimentDescription };
