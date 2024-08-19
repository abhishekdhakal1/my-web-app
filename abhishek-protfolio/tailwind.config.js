/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangered': '#db9c58',
        'darkred': '#f4a261',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        textBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        backgroundChange: {
          '0%': { backgroundColor: '#db9c58' },
          '50%': { backgroundColor: '#f4a261' },
          '100%': { backgroundColor: '#db9c58' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        typing: 'typing 4s steps(30, end) infinite',
        textBlink: 'textBlink 2s infinite',
        backgroundChange: 'backgroundChange 4s infinite',
        fadeInOut: 'fadeInOut 2s infinite',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
