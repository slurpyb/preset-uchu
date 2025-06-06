import { defineConfig } from "@pandacss/dev";
import presetUchu from "../src";

const uchuColors = [
  "gray",
  "pink",
  "red",
  "purple",
  "blue",
  "green",
  "yellow",
  "orange",
  "yin",
];

const asVars = (colors: string[]) =>
  colors.reduce<Record<string, string>>((acc, color) => {
    for (let i = 1; i <= 9; i++) {
      acc[`--uchu-${color}-${i}`] = `var(--colors-${color}-${i})`;
    }
    return acc;
  }, {});

export default defineConfig({
  // Whether to use css reset
  preflight: false,
  eject: true,
  presets: [uchuPreset],
  staticCss: {
    themes: [...uchuColors],
    css: [
      {
        properties: {
          colorPalette: [...uchuColors],
        },
        conditions: ["light", "dark"],
      },
    ],
  },

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  emitTokensOnly: true,
  // Files to exclude
  exclude: [],
  globalCss: {
    extend: {
      html: {
        colorPalette: "blue",
      },
      body: {
        colorPalette: "blue",
        backgroundColor: "{colors.bg}",
        color: "{colors.text}",
        _dark: {
          colorScheme: "dark",
        },
      },
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {},
    },
  },
  globalVars: {
    ...asVars(uchuColors),
  },
  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "solid",
});
