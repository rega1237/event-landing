/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/src/assets/images/fondo_header.jpg')",
      },
      fontFamily: {
        'chrismas': ['Mountains of Christmas', 'serif'],
        'mon': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

