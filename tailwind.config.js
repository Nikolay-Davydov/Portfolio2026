module.exports = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./pages/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7ff",
          100: "#e6edff",
          200: "#cce0ff",
          300: "#99c2ff",
          400: "#66a3ff",
          500: "#337fff",
          600: "#2a66e6",
          700: "#1f4db3",
          800: "#15367f",
          900: "#0b214d",
        },
      },
    },
  },
  plugins: [],
};
