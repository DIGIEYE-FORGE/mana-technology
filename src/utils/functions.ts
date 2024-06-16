import { JsonObject } from "./types";

export function stringify(value: unknown) {
  if (typeof value === "string") return value;
  if (typeof value === "number") return value.toString();
  return JSON.stringify(value);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const flatten = (
  obj: any,
  parentKey = "",
  res: JsonObject = {},
  sep: string = ".",
) => {
  for (const key in obj) {
    const propName = parentKey ? `${parentKey}${sep}${key}` : key;
    if (typeof obj[key] === "object") {
      res[propName] = obj[key];
      flatten(obj?.[key], propName, res, sep);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};
