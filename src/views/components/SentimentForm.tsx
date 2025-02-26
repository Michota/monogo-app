import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./SentimentForm.module.css";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/validation/textInputSchema";
import { z } from "zod";

interface SentimentFormProps {
  isAnalysisResultLoading: boolean;
  defaultText: string;
  setText: (text: string) => unknown;
  onInitializeAnalysis: () => void;
}

type FormValues = z.infer<typeof schema>;

function SentimentForm({ isAnalysisResultLoading, defaultText, setText, onInitializeAnalysis }: SentimentFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { text: defaultText },
  });

  const onSubmit = (data: FormValues) => {
    setText(data.text);
    onInitializeAnalysis();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formWrapper}>
        <div className={styles.container}>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                role="textbox"
                disabled={isAnalysisResultLoading || field.disabled}
                placeholder="Love of wisdom"
              />
            )}
          />

          <Button type="submit" isLoading={isAnalysisResultLoading}>
            Analizuj
          </Button>
        </div>
        {errors.text && (
          <div className={styles.errorWrapper}>
            <span data-testid="errorMessage" className={styles.error}>
              {errors.text.message}
            </span>
          </div>
        )}
      </div>
    </form>
  );
}

export default SentimentForm;
