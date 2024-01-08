/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D0E61",
        dark_primary: "#2a0447",
        secondary: "#FFc917",
        gray: "#deddd9",
      },
      // backgroundImage: {
      //   pattern: "url('./Assets/Images/pattern.png')",
      // },
    },
  },
  plugins: [],
};
