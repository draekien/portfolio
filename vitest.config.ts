import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    // The readability table is printed from an afterAll hook. Without this the
    // default reporter buffers it and only surfaces it when a test fails.
    disableConsoleIntercept: true,
  },
});
