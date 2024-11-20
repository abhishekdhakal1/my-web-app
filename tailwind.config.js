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
        ubuntu: ['Ubuntu', 'san-serif'],
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
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
      },
      animation: {
        typing: 'typing 4s steps(30, end) infinite',
        textBlink: 'textBlink 2s infinite',
        backgroundChange: 'backgroundChange 4s infinite',
        fadeInOut: 'fadeInOut 2s infinite',
        zoomIn: 'zoomIn 1s ease-out',
        zoomOut: 'zoomOut 1s ease-in',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'terminal': '0 4px 8px rgba(0, 0, 0, 0.7)',
        'btn': '0 2px 4px rgba(0, 0, 0, 0.3)', 
      },
      transitionProperty: {
        'width': 'width', 
        'height': 'height', 
      },
      transitionDuration: {
        '400': '400ms', 
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
