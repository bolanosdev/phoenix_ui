const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/**/**/*.{js,ts,jsx,tsx}",
    // "./tailwind/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {},
  },
  safelist: [
    "text-white",
    "text-black",
    "bg-white",
    "bg-dark",
    "flex",
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/,
      variants: ["hover", "focus"],
    },
    {
      pattern:
        /text-(neutral|stone|slate|gray|zinc|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900|950)/,
      variants: ["hover", "focus", "dark"],
    },
    {
      pattern: /opacity-(0|5|10|20|25|30|40|50|60|70|80|90|100)/,
      variants: ["hover", "focus", "dark"],
    },
    {
      pattern:
        /bg-(neutral|stone|slate|gray|zinc|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900|950)/,
      variants: ["hover", "focus", "dark"],
    },
    {
      pattern: /items-(stretch|center|start|end|baseline)/,
      variants: [],
    },
    {
      pattern: /flex-(row|col|row-reverse|col-reverse)/,
      variants: [],
    },
    {
      pattern:
        /justify-(normal|start|end|center|between|around|evenly|stretch)/,
      variants: [],
    },
    {
      pattern: /grow(-0)/,
      variants: [],
    },
    {
      pattern:
        /basis-(0|1|2|3|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|64|72|80|96|auto|px)/,
      variants: [],
    },
    {
      pattern:
        /w-(0|1|2|3|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|64|72|80|96|auto|px)/,
      variants: [],
    },
    {
      pattern:
        /h-(0|1|2|3|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|64|72|80|96|auto|px)/,
      variants: [],
    },
    {
      pattern: /m-(0|1|2|3|4|5|6|7|8)/,
      variants: [],
    },
    {
      pattern: /m(x|y|t|b|l|r)-(0|1|2|3|4|5|6|7|8)/,
      variants: [],
    },
    {
      pattern: /p-(0|1|2|3|4|5|6|7|8)/,
      variants: [],
    },
    {
      pattern: /p(x|y|t|b|l|r)-(0|1|2|3|4|5|6|7|8)/,
      variants: [],
    },
  ],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
