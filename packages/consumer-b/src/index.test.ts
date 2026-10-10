import assert from "node:assert/strict";
import { test } from "node:test";
import { nameLabel } from "./index.js";

test("labels a normalized name through the shared dependency", () => {
  assert.equal(nameLabel("  Grace   Hopper  "), "GRACE HOPPER");
});

test("rejects blank names through the shared dependency", () => {
  assert.throws(() => nameLabel("  "), /Name must not be blank/u);
});
