/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          blob: {
            '0%': { transform: 'scale(1)' },
            '33%': { transform: 'scale(1.2)' },
            '66%': { transform: 'scale(0.8)' },
            '100%': { transform: 'scale(1)' },
          },
        },
        animation: {
          blob: 'blob 10s infinite',
        },
        backgroundImage: {
          'skills-gradient': 'linear-gradient(38.73deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 204, 255, 0.1) 50%), linear-gradient(141.27deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 255, 255, 0) 50%)',
        },
        colors: {
          'neon-cyan': '#00ffff',
          'neon-green': '#00ff00',
          'neon-pink': '#ff00ff',
        },
      },
    },
    plugins: [],
  }
  