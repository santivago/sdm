module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hola: "url('/src/img/dance.png')",
        circulo: "url('/src/img/circulo.png')",
      },
      fontFamily: {
        fjalla: ["Fjalla One", "sans-serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        dorado: "#cda434",
      },
    },
  },
  // ...
};
