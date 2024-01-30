/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'vsm': '250px',
        'sm': '640px',  
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px', 
        '3xl': '3280px', 
      },
    },
  },
  plugins: [],
}