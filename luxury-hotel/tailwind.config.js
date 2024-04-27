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
      Yellow: '#E0B973',
      Green: '#252E00',
      White: '#FFFFFF',
      Grey: '#F1F2F3'
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Actor: ['Actor', 'sans-serif']
      },
      backgroundImage: {
        'login-bg': "url('/src/assets/images/sea.png')",
        'footer-texture': "url('/img/footer-texture.png')"
      },
      spacing: {
        128: '32rem'
      }
    }
  },
  plugins: []
}
