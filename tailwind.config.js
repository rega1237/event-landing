/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "/reclamar_entrada.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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

