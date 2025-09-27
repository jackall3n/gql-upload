import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "./src/index.ts",
    "./src/middleware/express.ts",
    "./src/middleware/koa.ts",
    "./src/utils/ignoreStream.ts",
    "./src/utils/processRequest.ts",
  ],
  platform: "neutral",
  dts: true,
  format: ["esm", "cjs"],
  clean: true,
  exports: true,
});
