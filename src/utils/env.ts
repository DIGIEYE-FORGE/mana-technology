import { z } from "zod";

const envSchema = z.object({
  VITE_BACKEND_API: z.string().url().default(`https://api.cloud.digieye.io`),
  VITE_LOCAL_MODELS: z.string().default(`false`),
  VITE_LOCAL_VIDEOS: z.string().default(`false`),
});

export const env = envSchema.parse(import.meta.env);
