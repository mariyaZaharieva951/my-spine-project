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
        'source-sans': ['Source Sans Pro', 'sans-serif'],
      },
      color: {
        'green-light': '#B4FF5C',
        'gray-text': '#606060',
        'gray-light': '#F1F4F5'
      }
    },
  },
  plugins: [],
}

