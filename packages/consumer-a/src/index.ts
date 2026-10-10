import { normalizeName } from "@trial/shared";

export function greeting(name: string): string {
  return `Hello, ${normalizeName(name)}!`;
}
