import { normalizeName } from "@trial/shared";

export function nameLabel(name: string): string {
  return normalizeName(name).toUpperCase();
}
