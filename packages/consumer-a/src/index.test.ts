import assert from "node:assert/strict";
import { test } from "node:test";
import { greeting } from "./index.js";

test("greets a normalized name through the shared dependency", () => {
  assert.equal(greeting("  Ada   Lovelace  "), "Hello, Ada Lovelace!");
});

test("rejects blank names through the shared dependency", () => {
  assert.throws(() => greeting("  "), /Name must not be blank/u);
});
