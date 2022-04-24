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
      black: "#15151e",
      beige: {
        light: "#fafafa",
        regular: "#E9EADE",
        dark: "#1a202c",
      },
    },
    fontFamily: {
      PrestoWide: ["PrestoWide", "sans-serif"],
      PrestoLight: ["PrestoLight", "sans-serif"],
      PrestoExtended: ["PrestoExtended", "sans-serif"],
    },
  },
};
