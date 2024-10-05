/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#15619d",
        customRed: "#d43c54",
      },
    },
    screens: {
      sm: { max: "650px" },
      // 'md': {'min': '768px', 'max': '1023px'},
      lg: { min: "651px" },
    },
  },
  plugins: [],
};
