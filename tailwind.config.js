/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      'animation': {
        'text': 'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        brand: '#FF6363',
        eucalyptus: '#49DDAD',
        surf: '#0AB7D1',
        eerie: '#1D1D1B',
        lotion: '#FAFAFA',
        vampirBlack: '#050b07',
        accents_1: '#111',
        accents_2: '#333',
        accents_3: '#444',
        accents_4: '#666',
        accents_5: '#888',
        accents_6: '#999',
        accents_7: '#eaeaea',
        accents_8: '#fafafa',
        background: '#000',
        foreground: '#fff',
        selection: '#f81ce5',
        secondary: '#888',
        code: '#79ffe1',
        border: '#333',
        error: '#e00',
        errorLighter: '#f7d4d6',
        errorLight: '#ff1a1a',
        errorDark: '#c50000',
        success: '#0070f3',
        successLighter: '#d3e5ff',
        successLight: '#3291ff',
        successDark: '#0761d1',
        warning: '#f5a623',
        warningLighter: '#ffefcf',
        warningLight: '#f7b955',
        warningDark: '#ab570a',
        cyan: '#50e3c2',
        cyanLighter: '#aaffec',
        cyanLight: '#79ffe1',
        cyanDark: '#29bc9b',
        violet: '#7928ca',
        violetLighter: '#e3d7fc',
        violetLight: '#8a63d2',
        violetDark: '#4c2889',
        purple: '#f81ce5',
        alert: '#ff0080',
        magenta: '#eb367f',
        green: '#0cce6b',
        info: '#fc6d26',
        link: '#3291ff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}