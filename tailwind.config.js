/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'desk-contact-box-w': '40rem',
        'desk-contact-box-h': '47.5rem',
        'mobile-contact-box-w': '20rem',
        'mobile-contact-box-h': '60rem',
        '68': '16.5rem',
      },
      screens: {
        'tablet': '664px'
      },
      fontFamily: {
        'Kalar': ['Kalar', 'sans-serif'],
      },
      colors: {
        'Green-600': 'hsl(169, 82%, 27%)',
        'Green-200': 'hsl(148, 38%, 91%)',
        'Grey-500': 'hsl(186, 15%, 59%)',
        'Grey-900': 'hsl(187, 24%, 22%)',
      }
    },
  },
  plugins: [],
}

