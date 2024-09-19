/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '650px'},
      // 'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '651px'},
    },
  },
  plugins: [],
}

