module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        bl1: '#D5FFEC',
        by1: '#FFC100'
      },
      width: {
        search: '60%'
      }   
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
