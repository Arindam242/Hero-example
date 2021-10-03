module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        home1: {
          bg: "#F7F7F9",
          h1: "#1E255E",
          btn: "#3C4EF3",
        },
        home3: {
          border: "#0061FE",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
