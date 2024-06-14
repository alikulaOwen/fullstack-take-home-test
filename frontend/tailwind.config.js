// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5ACCCC',
        'text-color': '335C6E',

        'primary-light': '#CFFAFA', 
        orange: '#F65434',
        yellow: '#FABD33',
        'yellow-red' : `#FAAD00`,
        teal: '#AAA088',
        'orange-red': '#F76434',
        'orange-pastel': '#F76434',
        'prmary-dark': '#53C2C2',
        'prmary-dark-2': '#28B8B8',
        base: '#FFFFFF', 
      },
    },
  },
  plugins: [],
}
