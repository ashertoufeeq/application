const { PRIMARY_COLOR } = require('./src/common/secrets.json');

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      body: ['Nunito', 'sans-serif'],
      display: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: PRIMARY_COLOR,
        grey: {
          'fa': '#FAFAFA',
          '99': '#999999',
          '66': '#666666'
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
