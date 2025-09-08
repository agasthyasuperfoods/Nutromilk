/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'milk-splash': {
          '0%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0px 10px rgba(249, 115, 22, 0.25)' },
          '50%': { transform: 'scale(2)', opacity: '0.8', boxShadow: '0 0 40px 10px rgba(249, 115, 22, 0.7)' },
          '100%': { transform: 'scale(3)', opacity: '0', boxShadow: '0 0 80px 20px rgba(249, 115, 22, 0)' },
        },
      },
      animation: {
        'milk-splash': 'milk-splash 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
    },
  },
  plugins: [],
};