import assert from "node:assert/strict";
import { test } from "node:test";
import { normalizeName } from "./index.js";

test("normalizes surrounding and repeated whitespace", () => {
  assert.equal(normalizeName("  Ada   Lovelace  "), "Ada Lovelace");
});

test("rejects blank names", () => {
  assert.throws(() => normalizeName(" \t "), /Name must not be blank/u);
});
