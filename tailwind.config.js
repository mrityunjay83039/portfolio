/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['35px', '32px'],
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