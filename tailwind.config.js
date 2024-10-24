/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./jobs.html','./navbar.html','./about.html','./profile.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0891b2',   //blue
        background: '#f7f7f7', //white
        color1: '#374151',  // gray - 700
        color2: '#4b5563', //gray-600
        color3: '#6b7280',     //gray-500
        hover: '#155e75', //dark blue

    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
