const {nextui} = require("@nextui-org/theme");
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ,"./node_modules/@nextui-org/theme/dist/components/(card|tabs|ripple).js", './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bgMain: "#0a0414",
        main: "#7021C0",
		bgGray: "rgba(30, 30, 46, 1)",
      },
      fontFamily: {
        "Helvetica": "Helvetica .Black"
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};