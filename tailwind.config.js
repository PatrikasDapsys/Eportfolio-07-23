/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-900": "#0c0c0c",
        "primary-300": "#A8A8A8",
        "primary-500": "#808080",
      },
      keyframes: {
        bouncing: {
          "0%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(6px)",
          },
        },
        rotating: {
          "0%": {
            rotate: "0deg",
          },
          "100%": {
            rotate: "360deg",
          },
        },
      },
      animation: {
        bouncing: "bouncing 400ms alternate infinite",
        rotate: "rotating 30s linear infinite",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
