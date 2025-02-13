import Modal from "@/components/Modal";
import SentimentDescription from "@/views/components/SentimentDescription";
import { useSentimentAnalysis } from "@/hooks/useSentimentAnalysis";
import { getDominantSentiment } from "@/utils/getDominantSentiment";
import { useState } from "react";
import SentimentForm from "./components/SentimentForm";
import styles from "./InputView.module.css";
import { Tooltip } from "react-tooltip";

function InputView() {
  const { text, analysisResult, setText, analyze, statuses, error } = useSentimentAnalysis();
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
      <div id="error">
        <SentimentForm
          isAnalysisResultLoading={isLoading}
          onInitializeAnalysis={handleAnalyze}
          setText={setText}
          defaultText={text}
        />
      </div>

      {analysisResult && (
        <Modal isModalOpen={isModalOpen} onModalClose={() => setIsModalOpen(false)}>
          <SentimentDescription data={getDominantSentiment(analysisResult)} />
        </Modal>
      )}

      {error && (
        <Tooltip isOpen variant="error" anchorSelect="#error">
          {error.message}
        </Tooltip>
      )}
    </div>
  );
}

export default InputView;
