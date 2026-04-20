/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#27272a',
          100: '#3f3f46',
          200: '#52525b',
          300: '#71717a',
          400: '#a1a1aa',
          500: '#27272a',   // Dark default buttons
          600: '#3f3f46',   // Dark hover
          700: '#52525b',
          800: '#18181b',   // Card accents
          900: '#09090b',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',   // Electric Cyan
          600: '#0891b2',
          700: '#0e7490',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
}