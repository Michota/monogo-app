import { z } from "zod";

const MAX_LENGTH = 500;

const schema = z.object({
  text: z
    .string()
    .min(1, "Pole nie może być puste")
    .max(MAX_LENGTH, `Pole nie może zawierać więcej niż ${MAX_LENGTH} znaków!`),
});

export { schema };
