import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function assertDefined<T>(
  value: T | null | undefined,
  message?: string,
): T {
  if (value == null)
    throw new Error(message ?? "Expected defined value, got null or undefined");
  return value;
}
