import { SentimentAnalysis } from "@/types/sentiment";

const getDominantSentiment = (classification: SentimentAnalysis[]): SentimentAnalysis => {
  const sortedClassification = classification.sort((a, b) => b.score - a.score);
  return sortedClassification[0];
};

export { getDominantSentiment };
