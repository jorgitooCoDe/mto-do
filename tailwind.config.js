/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mto_blue': '#101B37',
        'mto_pink': '#E41476',
        'mto_sky_blue': '#02C8ED',
      }
    },
  },
  plugins: [],
}