module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      content: "#000000",
      main: {
        light: "#fafafa",
        regular: "#EAEDE4",
        dark: "#1a202c",
      },
    },
    fontFamily: {
      PrestoWide: ["PrestoWide", "sans-serif"],
    },
  },
};
