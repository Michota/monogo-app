import { useSentimentAnalysis } from "@/hooks/useSentimentAnalysis";

function InputView() {
  const { sentiment, analysisResult, setSentiment, analyze, statuses } = useSentimentAnalysis();
  return (
    <>
      <input value={sentiment} onChange={(e) => setSentiment(e.target.value)} />
      <button style={{ opacity: statuses.isLoading ? 0.3 : 1 }} onClick={analyze}>
        analyze
      </button>
      {analysisResult?.map((result) => (
        <p style={{ background: "red" }} key={result.label}>
          {result.score}
        </p>
      ))}
    </>
  );
}

export default InputView;
