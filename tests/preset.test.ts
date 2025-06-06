import { describe, expect, test } from "vitest";
import type { Token, Tokens, RecursiveToken, Recursive } from "@pandacss/types";
import preset from "../src";
import expandedColors from "./resources/definitions/color_expanded";

test("colors", () => {
  const presetColors = preset.theme?.extend?.tokens?.colors as Recursive<
    Token<"colors">
  >;
  const uchuColors = expandedColors as Record<
    string,
    Record<string, string> | Record<string, string>
  >;
  if (!presetColors) {
    throw new Error("Preset colors are not defined");
  }
  for (const color of Object.keys(uchuColors)) {
    if (color === "general") {
      continue;
    }
    const presetShades = presetColors[color] as Token<"colors">;
    for (const shade of Object.keys(uchuColors[color])) {
      const token = presetShades[shade].value as string;

      expect(token).toEqual(uchuColors[color][shade]);
    }
  }
});
