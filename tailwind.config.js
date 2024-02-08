/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif'],
    },

    extend: {
      colors: {
        'textColor': '#999999',
        'bgDefault': '#1f1f1f',
        'textWhite': '#ffffff',
        'textPrimary': '#28e98c',
      }
    },
  },
  plugins: [],
}