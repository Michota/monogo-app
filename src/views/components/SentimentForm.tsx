import Button from "@/components/Button";
import Input from "@/components/Input";

interface SentimentFormProps {
  isAnalysisResultLoading: boolean;
  text: string;
  setText: (text: string) => unknown;
  onInitializeAnalysis: () => void;
}

function SentimentForm({ isAnalysisResultLoading, text, setText, onInitializeAnalysis }: SentimentFormProps) {
  return (
    <div style={{ display: "flex" }}>
      <Input disabled={isAnalysisResultLoading} value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={onInitializeAnalysis} isLoading={isAnalysisResultLoading}>
        Analizuj
      </Button>
    </div>
  );
}

export default SentimentForm;
