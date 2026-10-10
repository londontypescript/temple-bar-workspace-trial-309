/** Both consumers use the same whitespace handling. */
export function normalizeName(name: string): string {
  const normalized = name.trim().replace(/\s+/gu, " ");
  if (normalized.length === 0) throw new Error("Name must not be blank");
  return normalized;
}
