import react from '@vitejs/plugin-react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'beige': '#fbf8f5',
        'gray': '#303841',
      },
    },
  },
  plugins: [react(), require('daisyui'),],
}