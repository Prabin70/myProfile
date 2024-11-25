
/** @type {import('tailwindcss').Config} */

import { fromJSON } from 'postcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blink-animate': 'blink-animate 3s infinite',
        "scroll": 'scroll 10s linear infinite'

      },
      keyframes: {
        'blink-animate': {

          '0%': { opacity: 1 },
          '50%': { opacity: .5 },
          '100%': { opacity: 1 },
        },
        "scroll": {
          "0%": {
            transform: 'translateX(0)',
          },
          "100%": {
            transform: 'translateX(-50%)',
          }
        }
      },
      backgroundImage: {
        'bg-image': "url('/src/assets/about.png')",
        'grayscale': 100,
      },

      fontFamily: {
        body: ['poppins', 'sans-serif'],
      },

      fontFamily: {
        forHi: ["Shadows Into Light"]
      },


      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },



      boxShadow: {
        '3xl': '0 10px 10px -7px #808080',
      },
      dropShadow: {
        '3xl': '0 0 25px #0ef',
      },




    },
  },
  plugins: [],
}

