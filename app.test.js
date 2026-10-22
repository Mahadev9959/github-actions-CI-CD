const { test } = require("node:test");
const assert = require("node:assert/strict");
const { getMessage } = require("./app");

test("application returns the expected message", () => {
  assert.equal(
    getMessage(),
    "Hello! My Node.js CI/CD pipeline is working."
  );
});
