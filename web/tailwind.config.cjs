/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        blockBG: '#2A2634',
      },
      backgroundImage: {
        // nlwGradient: 'linear-gradient(90deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        nlwRainbowGradient: 'linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E1D55D 100%)',
        nlwShadowGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
        galaxy: "url('/background-galaxy.svg')",
      }
    },
  },
  plugins: [],
}
