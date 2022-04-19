module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // your custom colors goes here *************************
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        // custom fonts goes here *******************************
        favoritFont: ['Nunito']
      }
    },
  },
  plugins: [],
}
