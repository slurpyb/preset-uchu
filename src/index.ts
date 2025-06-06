import type { Preset } from "@pandacss/types";
import { definePreset } from "@pandacss/dev";
import { colorTokens, semanticColorTokens } from "./colors";

export const preset: Preset = definePreset({
  name: "@slurpyb/preset-uchu",
  conditions: {
    extend: {
      light: "[data-theme=light] &",
      dark: "[data-theme=dark] &",
    },
  },
  theme: {
    extend: {
      tokens: {
        colors: colorTokens,
      },
      semanticTokens: {
        colors: semanticColorTokens,
      },
    },
  },
});

export default preset;
