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
        'primary': '#1d4ed8', // Add primary color
        'secondary': '#9333ea', // Add secondary color
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        ubuntu: ['Ubuntu', 'sans-serif'],
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
        fadeInOut: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        typing: 'typing 4s steps(30, end) infinite',
        textBlink: 'textBlink 2s infinite',
        fadeInOut: 'fadeInOut 2s infinite',
        zoomIn: 'zoomIn 1s ease-out',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'terminal': '0 4px 8px rgba(0, 0, 0, 0.7)',
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