import { Sentiment } from "@/types/sentiment";
import { LucideProps, LaughIcon, SmileIcon, Meh, FrownIcon, AngryIcon, LucideIcon } from "lucide-react";

interface SentimentIcon extends LucideProps {
  sentiment: Sentiment;
  isEmotionStrong: boolean;
}

function SentimentIcon({ sentiment, isEmotionStrong, ...props }: SentimentIcon) {
  let Icon: LucideIcon;

  switch (sentiment) {
    case "POSITIVE":
      Icon = isEmotionStrong ? LaughIcon : SmileIcon;
      break;
    case "NEUTRAL":
      Icon = Meh;
      break;
    case "NEGATIVE":
      Icon = isEmotionStrong ? FrownIcon : AngryIcon;
      break;
  }

  return <Icon {...props} />;
}

export default SentimentIcon;
