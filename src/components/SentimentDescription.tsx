import { SentimentAnalysis } from "@/types/sentiment";
import { createSentimentDescription } from "@/utils/createSentimentDescription";
import SentimentIcon from "./SentimentIcon";

interface SentimentDescriptionProps {
  data: SentimentAnalysis;
}

function SentimentDescription({ data }: SentimentDescriptionProps) {
  const isEmotionStrong = data.score > 0.7;

  return (
    <div>
      <SentimentIcon isEmotionStrong={isEmotionStrong} sentiment={data.label} />
      <span data->{data.label}</span>: <span>{createSentimentDescription(data.label, isEmotionStrong)}</span>
    </div>
  );
}

export default SentimentDescription;
