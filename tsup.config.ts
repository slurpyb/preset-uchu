import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  minify: false,
  outDir: "dist",
  sourcemap: true,
  watch: options.watch ?? false,
  external: ["@pandacss/dev", "@pandacss/types", "vitest"],
  outExtension({ format }) {
    return format === "esm" ? { js: ".mjs" } : { js: ".cjs" };
  },
  ...options,
}));
