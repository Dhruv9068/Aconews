/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'], // Fredoka font
        sans: ['Roboto', 'sans-serif'], // Roboto Google font
        rubik: ['Rubik', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounceIn: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '80%': {
            transform: 'scale(1.05)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        bounceIn: 'bounceIn 1s ease-in-out',
      },
      colors: {
        neonBlue: '#00f0ff',   // Custom neon blue
        darkGray: '#262626',   // Custom dark gray background
        lightGray: '#f5f5f5',  // Custom light gray for text or backgrounds
      },
    },
  },
  plugins: [
   
  ],
}
