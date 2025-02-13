import Modal from "@/components/Modal";
import SentimentDescription from "@/views/components/SentimentDescription";
import { useSentimentAnalysis } from "@/hooks/useSentimentAnalysis";
import { getDominantSentiment } from "@/utils/getDominantSentiment";
import { useState } from "react";
import SentimentForm from "./components/SentimentForm";
import styles from "./InputView.module.css";

function InputView() {
  const { text, analysisResult, setText, analyze, statuses } = useSentimentAnalysis();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading } = statuses;

  const handleAnalyze = async () => {
    const analysisResult = await analyze();

    if (analysisResult.isError) {
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <div className={styles.view}>
      <SentimentForm
        isAnalysisResultLoading={isLoading}
        onInitializeAnalysis={handleAnalyze}
        setText={setText}
        defaultText={text}
      />
      {analysisResult && (
        <Modal isModalOpen={isModalOpen} onModalClose={() => setIsModalOpen(false)}>
          <SentimentDescription data={getDominantSentiment(analysisResult)} />
        </Modal>
      )}
    </div>
  );
}

export default InputView;
