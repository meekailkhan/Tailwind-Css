/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
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

