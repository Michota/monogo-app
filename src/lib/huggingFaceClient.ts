import HUGGING_FACE_TOKEN from "@/consts/huggingFaceToken";
import { HfInference } from "@huggingface/inference";

const huggingFaceClient = new HfInference(HUGGING_FACE_TOKEN);

export default huggingFaceClient;
