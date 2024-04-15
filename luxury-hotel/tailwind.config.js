/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px'
      }
    },
    colors: {
      Yellow: '#EBBC68',
      Green: '#252E00',
      White: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Actor: ['Actor', 'sans-serif']
      }
    }
  },
  plugins: []
}
