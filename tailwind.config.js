/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],

      },
      colors:{
        'custom-green':'#0D7D47',
      }
    },
  },
  plugins: [],
}
