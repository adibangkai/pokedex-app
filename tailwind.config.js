/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bug: "#7BCF00",
        dark: "#5A566A",
        dragon: "#0076FF",
        electric: "#EEC200",
        fairy: "#EA758C",
        fighting: "#FF215B",
        fire: "#FF9900",
        flying: "#89BDFF",
        ghost: "#2A2222",
        grass: "#409029",
        ground: "#FF6B0D",
        ice: "#2EE4C6",
        normal: "#9FA39D",
        poison: "#FF4C7E",
        psychic: "#005367",
        rock: "#CACED2",
        steel: "#72787D",
        darkBg: "#060B28",
        darkBgCard: "#010412",
        water: "#62BBE1",
      },
    },
  },
  plugins: [],
};
