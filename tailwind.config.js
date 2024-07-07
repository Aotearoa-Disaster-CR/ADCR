import react from '@vitejs/plugin-react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      'gray': '#303841',
      'beige': '#fbf8f5',
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: '#303841',
          text: '#FFFFFF'
        },
      },
    ],
  },
  plugins: [react(), require('daisyui'),],
}