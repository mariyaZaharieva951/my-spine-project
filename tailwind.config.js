/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pro': ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        'green-light': '#B4FF5C',
        'gray-text': '#606060',
        'gray-light': '#F1F4F5',
        'gray-dark': '#464646',
        'gray-bg': '#D9D9D9',
        'black-text': '#0C0C0C',

      },
      gradientColorStops: theme => ({
        'green-light': '#DCFFB3',
        'white': '#ffffff',
      }),
      backgroundImage: {
        'web-design': "url('/assets/background.png')",
      },
    },
  },
  plugins: [],
}

