import { TextClassification } from "@/services/getSentimentAnalysis";

export const Sentiment = {
  POSITIVE: "POSITIVE",
  NEUTRAL: "NEUTRAL",
  NEGATIVE: "NEGATIVE",
};

export type Sentiment = keyof typeof Sentiment;

export interface SentimentAnalysis extends TextClassification {
  label: Sentiment;
}

export function isSentimentAnalysis(analysis: { label: string }): analysis is SentimentAnalysis {
  return Object.values(Sentiment).includes(analysis.label);
}
