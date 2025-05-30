import { JsonObject } from "./types";

export function stringify(value: unknown) {
  if (typeof value === "string") return value;
  if (typeof value === "number") return value.toString();
  return JSON.stringify(value);
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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

export async function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    return true;
  } else if (document.exitFullscreen) {
    await document.exitFullscreen();
    return false;
  }
}


export function getHoursSinceMidnight() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Convert to decimal hours
    return hours + (minutes / 60) + (seconds / 3600);
}
