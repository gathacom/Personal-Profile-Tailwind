/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center : true,
      padding : '16px',
    },
    extend: {
      colors:{
        primary : '#059669',
        pale : '#64748b',
        secondary : '#10b981',
        dark : '#0f172a',
      },
      screens :{
         '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

