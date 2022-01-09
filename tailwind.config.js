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
        "LXGW New Clear Gothic",
        "LXGW Clear Gothic",
        "monospace",
      ],
      logo: ["Bodoni Moda", "LXGW WenKai", "serif"],
    },
    extend: {
      screens: {
        "2md": "880px",
      },
    },
    extend: {
      colors: {
        gray: colors.stone,
      },
    },
  },
}
