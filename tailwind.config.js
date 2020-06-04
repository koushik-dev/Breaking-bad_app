const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    extend: {}
  },
  
  variants: {},
  plugins: [
    plugin(function({ addUtilities }){
      const newUtil = {
        '.auto-fit': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
        }
      }

      addUtilities(newUtil)
    })
  ],
}
