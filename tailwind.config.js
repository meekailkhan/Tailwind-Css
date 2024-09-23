/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      mlg: '860px', 
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize:{
        '10xl':['9rem',{lineHeight : '1.5'}],
      },
      spacing: {
        100 : ["30rem"]
      }
    },
  },
  plugins: [],
}

