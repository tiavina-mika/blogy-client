import { z } from "zod";

export const articleSchema = z.object({
  title: z.string().min(1, { message: 'Title required' }),
  content: z.string().max(500, { message: 'The content should be 500 characters max' }),
});