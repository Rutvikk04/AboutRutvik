
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          "0%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(-10%)" },
          "20%": { transform: "translateY(-20%)" },
          "30%": { transform: "translateY(-30%)" },
          "40%": { transform: "translateY(-40%)" },
          "50%": { transform: "translateY(-50%)" },
          "60%": { transform: "translateY(-60%)" },
          "70%": { transform: "translateY(-70%)" },
          "80%": { transform: "translateY(-80%)" },
          "90%": { transform: "translateY(-90%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "text-scroll": "upDown 12s  infinite",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
       ".my-rotate":{
        transform:"rotateY(180deg)"
       },
       ".perspective":{
        perspective: "1000px"
      },  
      ".preserve-3d":{
        transformStyle:" preserve-3d"
      },
      ".backface-hidden":{
        backfaceVisibility:"hidden"
      }   
      

      }
      addUtilities(newUtilities)
    }),
  ],
}

