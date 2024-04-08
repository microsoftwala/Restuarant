/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'anta':['Anta','sans-serif'],
        'fred': ['Fredoka', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'kal':[ "Kalnia", 'serif'],
        'dance':["Dancing Script","cursive"],
      },
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  plugins: [],
}