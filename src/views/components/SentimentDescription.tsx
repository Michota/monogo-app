import { SentimentAnalysis } from "@/types/sentiment";
import { createSentimentDescription } from "@/utils/createSentimentDescription";
import { Tooltip } from "react-tooltip";
import styles from "./SentimentDescription.module.css";
import SentimentIcon from "./SentimentIcon";

interface SentimentDescriptionProps {
  data: SentimentAnalysis;
}

const tooltipInitializerId = "negative-tooltip-id";

function SentimentDescription({ data }: SentimentDescriptionProps) {
  const isEmotionStrong = data.score > 0.7;
  const isNegative = data.label === "NEGATIVE";

  return (
    <div id={tooltipInitializerId} data-sentiment={data.label} className={styles.description}>
      <SentimentIcon data-testid="sentiment-icon" isEmotionStrong={isEmotionStrong} sentiment={data.label} />
      <span>{createSentimentDescription(data.label, isEmotionStrong)}</span>
      {isNegative && <Tooltip anchorSelect={`#${tooltipInitializerId}`}>Może spróbuj być milszy, co?</Tooltip>}
    </div>
  );
}

export default SentimentDescription;
