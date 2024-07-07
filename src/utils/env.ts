import { z } from "zod";

const envSchema = z.object({
  VITE_BACKEND_API: z.string().url().default(`https://api.cloud.digieye.io`),
  VITE_LOCAL_MODELS: z.string().default(`true`),
});

export const env = envSchema.parse(import.meta.env);
