/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mythemeDark: {  
          "base-100": "#3d8f69",  
        },
      },
    ],
    darkTheme: "mythemeDark", 
  },
}

