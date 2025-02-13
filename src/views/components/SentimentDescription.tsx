import { SentimentAnalysis } from "@/types/sentiment";
import { createSentimentDescription } from "@/utils/createSentimentDescription";
import styles from "./SentimentDescription.module.css";
import SentimentIcon from "./SentimentIcon";

interface SentimentDescriptionProps {
  data: SentimentAnalysis;
}

function SentimentDescription({ data }: SentimentDescriptionProps) {
  const isEmotionStrong = data.score > 0.7;

  return (
    <div data-sentiment={data.label} className={styles.description}>
      <SentimentIcon isEmotionStrong={isEmotionStrong} sentiment={data.label} />
      <span>{createSentimentDescription(data.label, isEmotionStrong)}</span>
    </div>
  );
}

export default SentimentDescription;
