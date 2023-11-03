import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function range(begin: number, end: number): number[] {
  return [...Array(end - begin)].map((_, i) => begin + i);
}
