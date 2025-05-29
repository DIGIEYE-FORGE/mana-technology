import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseBoolean(value: unknown): boolean {
  try {
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return value !== 0;
    if (typeof value === "string") return JSON.parse(value.toLocaleLowerCase());
    return false;
  } catch (e) {
    return false;
  }
}
