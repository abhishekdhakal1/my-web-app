/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#000000',
        'terminal-text': '#00ff00', 
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
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
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'terminal': '0 4px 8px rgba(0, 0, 0, 0.7)', // Custom shadow for terminal
        'btn': '0 2px 4px rgba(0, 0, 0, 0.3)', // Custom shadow for buttons
      },
      transitionProperty: {
        'width': 'width', // Custom transition for width changes
        'height': 'height', // Custom transition for height changes
      },
      transitionDuration: {
        '400': '400ms', // Custom duration for transitions
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
