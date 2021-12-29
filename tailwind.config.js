const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.vue",
    "./node_modules/@xieyuheng/postmark-components-vue3/src/**/*.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Linux Biolinum O", "LXGWWenKai", "sans-serif"],
      serif: ["Linux Libertine O", "LXGWWenKai", "serif"],
      mono: ["Fira Code", "monospace"],
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
