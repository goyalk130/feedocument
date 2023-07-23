/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes:{
        scooter : {
         '0%':{
            bottom: "0rem"
          },
          '100%':{
            bottom: "2rem"
          }
        }
      },
      animation:{
        scooter:"scooter infinte ease-in-out"
      },
      fontFamily:{
        "fjalla": ['Fjalla One', 'sans-serif']
      },
      backgroundImage: {
        "dots":"url('/dots.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
