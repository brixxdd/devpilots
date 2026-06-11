import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappUrl(message: string) {
  return `https://wa.me/529626002508?text=${encodeURIComponent(message)}`;
}
