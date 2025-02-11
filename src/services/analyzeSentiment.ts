import huggingFaceClient from "@/lib/huggingFaceClient";

const analyzeSentiment = async (text: string) => {
  const result = await huggingFaceClient.textClassification({
    model: "distilbert-base-uncased-finetuned-sst-2-english",
    inputs: text,
  });

  return result;
};

export { analyzeSentiment };
