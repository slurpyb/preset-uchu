import {
  defineTokens,
  defineSemanticTokens,
  type Tokens,
  type SemanticTokens,
} from "@pandacss/dev";

export const colorTokens: Tokens["colors"] = defineTokens.colors({
  gray: {
    1: { value: "oklch(95.57% 0.003 286.35)" },
    2: { value: "oklch(92.04% 0.002 197.12)" },
    3: { value: "oklch(88.28% 0.003 286.34)" },
    4: { value: "oklch(84.68% 0.002 197.12)" },
    5: { value: "oklch(80.73% 0.002 247.84)" },
    6: { value: "oklch(75.03% 0.002 247.85)" },
    7: { value: "oklch(69.01% 0.003 286.32)" },
    8: { value: "oklch(63.12% 0.004 219.55)" },
    9: { value: "oklch(56.82% 0.004 247.89)" },
  },

  red: {
    1: { value: "oklch(88.98% 0.052 3.28)" },
    2: { value: "oklch(78.78% 0.109 4.54)" },
    3: { value: "oklch(69.86% 0.162 7.82)" },
    4: { value: "oklch(62.73% 0.209 12.37)" },
    5: { value: "oklch(58.63% 0.231 19.6)" },
    6: { value: "oklch(54.41% 0.214 19.06)" },
    7: { value: "oklch(49.95% 0.195 18.34)" },
    8: { value: "oklch(45.8% 0.177 17.7)" },
    9: { value: "oklch(41.17% 0.157 16.58)" },
  },
  pink: {
    1: { value: "oklch(95.8% 0.023 354.27)" },
    2: { value: "oklch(92.14% 0.046 352.31)" },
    3: { value: "oklch(88.9% 0.066 354.39)" },
    4: { value: "oklch(85.43% 0.09 354.1)" },
    5: { value: "oklch(82.23% 0.112 355.33)" },
    6: { value: "oklch(76.37% 0.101 355.37)" },
    7: { value: "oklch(70.23% 0.092 354.96)" },
    8: { value: "oklch(64.11% 0.084 353.91)" },
    9: { value: "oklch(57.68% 0.074 353.14)" },
  },
  purple: {
    1: { value: "oklch(89.1% 0.046 305.24)" },
    2: { value: "oklch(78.68% 0.091 305)" },
    3: { value: "oklch(68.5% 0.136 303.78)" },
    4: { value: "oklch(58.47% 0.181 302.06)" },
    5: { value: "oklch(49.39% 0.215 298.31)" },
    6: { value: "oklch(46.11% 0.198 298.4)" },
    7: { value: "oklch(42.77% 0.181 298.49)" },
    8: { value: "oklch(39.46% 0.164 298.29)" },
    9: { value: "oklch(36.01% 0.145 298.35)" },
  },
  blue: {
    1: { value: "oklch(89.66% 0.046 260.67)" },
    2: { value: "oklch(80.17% 0.091 258.88)" },
    3: { value: "oklch(70.94% 0.136 258.06)" },
    4: { value: "oklch(62.39% 0.181 258.33)" },
    5: { value: "oklch(54.87% 0.222 260.33)" },
    6: { value: "oklch(51.15% 0.204 260.17)" },
    7: { value: "oklch(47.36% 0.185 259.89)" },
    8: { value: "oklch(43.48% 0.17 260.2)" },
    9: { value: "oklch(39.53% 0.15 259.87)" },
  },
  green: {
    1: { value: "oklch(93.96% 0.05 148.74)" },
    2: { value: "oklch(88.77% 0.096 147.71)" },
    3: { value: "oklch(83.74% 0.139 146.57)" },
    4: { value: "oklch(79.33% 0.179 145.62)" },
    5: { value: "oklch(75.23% 0.209 144.64)" },
    6: { value: "oklch(70.03% 0.194 144.71)" },
    7: { value: "oklch(64.24% 0.175 144.92)" },
    8: { value: "oklch(58.83% 0.158 145.05)" },
    9: { value: "oklch(52.77% 0.138 145.41)" },
  },
  yellow: {
    1: { value: "oklch(97.05% 0.039 91.2)" },
    2: { value: "oklch(95% 0.07 92.39)" },
    3: { value: "oklch(92.76% 0.098 92.58)" },
    4: { value: "oklch(90.92% 0.125 92.56)" },
    5: { value: "oklch(89% 0.146 91.5)" },
    6: { value: "oklch(82.39% 0.133 91.5)" },
    7: { value: "oklch(75.84% 0.122 92.21)" },
    8: { value: "oklch(69.14% 0.109 91.04)" },
    9: { value: "oklch(62.29% 0.097 91.9)" },
  },
  orange: {
    1: { value: "oklch(93.83% 0.037 56.93)" },
    2: { value: "oklch(88.37% 0.07258208750520016 55.80328658240742)" },
    3: { value: "oklch(83.56% 0.10753627570574478 56.492594564236946)" },
    4: { value: "oklch(78.75% 0.14163582809066333 54.32911089172009)" },
    5: { value: "oklch(74.61% 0.171 51.56)" },
    6: { value: "oklch(69.33% 0.157 52.18)" },
    7: { value: "oklch(63.8% 0.142 52.1)" },
    8: { value: "oklch(58.28% 0.128 52.2)" },
    9: { value: "oklch(52.49% 0.113 51.98)" },
  },
  yin: {
    1: { value: "oklch(91.87% 0.003 264.54)" },
    2: { value: "oklch(84.61% 0.004 286.31)" },
    3: { value: "oklch(76.89% 0.004 247.87)" },
    4: { value: "oklch(69.17% 0.004 247.88)" },
    5: { value: "oklch(61.01% 0.005 271.34)" },
    6: { value: "oklch(52.79% 0.005 271.32)" },
    7: { value: "oklch(43.87% 0.005 271.3)" },
    8: { value: "oklch(35.02% 0.005 236.66)" },
    9: { value: "oklch(25.11% 0.006 258.36)" },
  },
  yang: { value: "oklch(99.4% 0 0)" },
});

export const semanticColorTokens: SemanticTokens["colors"] =
  defineSemanticTokens.colors({
    gray: {
      default: {
        value: {
          _light: "{colors.gray.1}",
          _dark: "{colors.gray.9}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.gray.8}",
          _dark: "{colors.gray.3}",
        },
      },
      accent: {
        value: {
          _light: "{colors.gray.4}",
          _dark: "{colors.gray.4}",
        },
      },
      fg: { value: { _light: "white", _dark: "white" } },
      text: {
        value: {
          _light: "{colors.gray.9}",
          _dark: "{colors.gray.1}",
        },
      },
      bg: { value: { _light: "{colors.gray.9}", _dark: "{colors.gray.1}" } },
    },
    red: {
      DEFAULT: {
        value: {
          _light: "{colors.red.1}",
          _dark: "{colors.red.9}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.red.8}",
          _dark: "{colors.red.3}",
        },
      },
      accent: {
        value: {
          _light: "{colors.red.4}",
          _dark: "{colors.red.4}",
        },
      },
      fg: { value: { _light: "white", _dark: "white" } },
      text: {
        value: {
          _light: "{colors.red.9}",
          _dark: "{colors.red.1}",
        },
      },
      bg: { value: { _light: "{colors.red.9}", _dark: "{colors.red.1}" } },
    },
    pink: {
      default: {
        value: {
          _light: "{colors.pink.1}",
          _dark: "{colors.pink.9}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.pink.8}",
          _dark: "{colors.pink.3}",
        },
      },
      fg: { value: { _light: "white", _dark: "white" } },
      text: {
        value: {
          _light: "{colors.pink.9}",
          _dark: "{colors.pink.1}",
        },
      },
      bg: { value: { _light: "{colors.pink.9}", _dark: "{colors.pink.1}" } },
    },
    purple: {
      default: {
        value: {
          _light: "{colors.purple.1}",
          _dark: "{colors.purple.9}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.purple.8}",
          _dark: "{colors.purple.3}",
        },
      },
      fg: { value: { _light: "white", _dark: "white" } },
      text: {
        value: {
          _light: "{colors.purple.9}",
          _dark: "{colors.purple.1}",
        },
      },
      bg: {
        value: { _light: "{colors.purple.9}", _dark: "{colors.purple.1}" },
      },
    },
    blue: {
      DEFAULT: {
        value: {
          _light: "{colors.blue.1}",
          _dark: "{colors.blue.9}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.blue.8}",
          _dark: "{colors.blue.3}",
        },
      },
      accent: {
        value: {
          _light: "{colors.blue.4}",
          _dark: "{colors.blue.4}",
        },
      },
      fg: { value: { _light: "white", _dark: "white" } },
      text: {
        value: {
          _light: "{colors.blue.9}",
          _dark: "{colors.blue.1}",
        },
      },
    },
    green: {
      default: {
        value: {
          _light: "{colors.green.1}",
          _dark: "{colors.green.9}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.green.8}",
          _dark: "{colors.green.3}",
        },
      },
      fg: { value: { _light: "white", _dark: "white" } },
      text: {
        value: {
          _light: "{colors.green.9}",
          _dark: "{colors.green.1}",
        },
      },
      bg: { value: { _light: "{colors.green.9}", _dark: "{colors.green.1}" } },
    },
    yellow: {
      default: {
        value: {
          _light: "{colors.yellow.1}",
          _dark: "{colors.yellow.9}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.yellow.8}",
          _dark: "{colors.yellow.3}",
        },
      },
      fg: { value: { _light: "black", _dark: "black" } },
      text: {
        value: {
          _light: "{colors.yellow.9}",
          _dark: "{colors.yellow.1}",
        },
      },
    },

    orange: {
      default: {
        value: {
          _light: "{colors.orange.1}",
          _dark: "{colors.orange.9}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.orange.8}",
          _dark: "{colors.orange.3}",
        },
      },
      fg: { value: { _light: "black", _dark: "black" } },
      text: {
        value: {
          _light: "{colors.orange.9}",
          _dark: "{colors.orange.1}",
        },
      },
    },
    yin: {
      default: {
        value: {
          _light: "{colors.yin.1}",
          _dark: "{colors.yin.9}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.yin.8}",
          _dark: "{colors.yin.3}",
        },
      },
      fg: { value: { _light: "white", _dark: "white" } },
      text: {
        value: {
          _light: "{colors.yin.9}",
          _dark: "{colors.yin.1}",
        },
      },
    },
    // yang: {
    //   default: {
    //     value: {
    //       _light: "{colors.yang.1}",
    //       _dark: "{colors.gray.9}",
    //     },
    //   },
    //   fg: { value: { _light: "black", _dark: "white" } },
    //   text: {
    //     value: {
    //       _light: "{colors.gray.9}",
    //       _dark: "{colors.yang.1}",
    //     },
    //   },
    // },
    bg: {
      canvas: {
        value: { _light: "{colors.gray.1}", _dark: "{colors.gray.9}" },
      },
      DEFAULT: { value: { _light: "white", _dark: "{colors.yin.9}" } },
      subtle: {
        value: { _light: "{colors.gray.2}", _dark: "{colors.gray.3}" },
      },
      muted: { value: { _light: "{colors.gray.3}", _dark: "{colors.gray.4}" } },
      emphasized: {
        value: { _light: "{colors.gray.4}", _dark: "{colors.gray.5}" },
      },
      disabled: {
        value: { _light: "{colors.gray.5}", _dark: "{colors.gray.6}" },
      },
    },
    // fg: {
    //   DEFAULT: {
    //     value: { _light: "{colors.gray.9}", _dark: "{colors.gray.1}" },
    //   },
    //   muted: {
    //     value: { _light: "{colors.gray.8}", _dark: "{colors.gray.2}" },
    //   },
    //   subtle: {
    //     value: { _light: "{colors.gray.7}", _dark: "{colors.gray.3}" },
    //   },
    //   disabled: {
    //     value: { _light: "{colors.gray.6}", _dark: "{colors.gray.4}" },
    //   },
    //   error: { value: { _light: "{colors.red.9}", _dark: "{colors.red.9}" } },
    // },
    border: {
      DEFAULT: {
        value: { _light: "{colors.gray.5}", _dark: "{colors.gray.5}" },
      },
      muted: { value: { _light: "{colors.gray.4}", _dark: "{colors.gray.4}" } },
      subtle: {
        value: { _light: "{colors.gray.3}", _dark: "{colors.gray.3}" },
      },
      disabled: {
        value: { _light: "{colors.gray.2}", _dark: "{colors.gray.2}" },
      },
      outline: {
        value: { _light: "{colors.gray.6}", _dark: "{colors.gray.6}" },
      },
      error: { value: { _light: "{colors.red.9}", _dark: "{colors.red.9}" } },
    },
    text: {
      value: {
        _light: "{colors.yin.9}",
        _dark: "white",
      },
    },
  });
