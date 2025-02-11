import huggingFaceClient from "@/lib/huggingFaceClient";
import { isSentimentAnalysis } from "@/types/sentiment";

async function fetchSentimentAnalysis(text: string) {
  const result = await huggingFaceClient.textClassification({
    model: "distilbert-base-uncased-finetuned-sst-2-english",
    inputs: text,
  });

  return result;
}

type TextClassification = Awaited<ReturnType<typeof fetchSentimentAnalysis>>[number];

async function getSentimentAnalysis(text: string) {
  const queryResult = await fetchSentimentAnalysis(text);
  return queryResult.map((resultItem) => {
    if (isSentimentAnalysis(resultItem)) {
      return resultItem;
    } else {
      throw new Error("Fetched item is not a result of sentiment analysis!");
    }
  });
}

export { getSentimentAnalysis, type TextClassification };
