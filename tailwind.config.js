/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-300": "#A8A8A8",
        "dark-500": "#808080",
        "dark-900": "#0c0c0c",
        "light-300": "#585858",
        "light-500": "#404040",
        "light-700": "#212121",
        "light-900": "#e5e5e5",
      },
      aspectRatio: {
        "2/1": "2 / 1",
      },
      keyframes: {
        bouncing: {
          "0%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(8px)",
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
        glow: {
          "0%": {
            boxShadow: "none",
          },
          "50%": {
            boxShadow: "0px 0px 2px 2px #808080",
          },
          "100%": {
            boxShadow: "none",
          },
        },
      },
      animation: {
        bouncing: "bouncing 400ms alternate infinite",
        rotate: "rotating 30s linear infinite",
        glow: "glow 800ms linear infinite",
        glowingBounce:
          "bouncing 400ms alternate infinite, glow 800ms linear infinite",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
