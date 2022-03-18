const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.vue",
    "./node_modules/@xieyuheng/postmark-components-vue3/src/**/*.vue",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Linux Biolinum O",
        "LXGW New Clear Gothic",
        "LXGW Clear Gothic",
        "sans-serif",
      ],
      serif: ["Linux Libertine O", "LXGW WenKai", "serif"],
      mono: [
        "Fira Code",
        // NOTE One Chinese character should equal to two English characters.
        "LXGW WenKai Larger",
        "monospace",
      ],
      logo: ["Bodoni Moda", "Source Han Serif SC", "serif"],
    },
    extend: {
      colors: {
        gray: colors.stone,
      },
    },
    extend: {
      screens: {
        "2md": "880px",
      },
    },
  },
}
