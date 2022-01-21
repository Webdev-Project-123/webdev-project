module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        phuongCustom: "3px 3px 5px 0px rgba(0, 0, 0, 0.2)",
        phuongCustomActive: "1px 1px 2px 0px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        sourceCodePro: ["Source Code Pro", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        robotoS: ["Roboto Slab", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
