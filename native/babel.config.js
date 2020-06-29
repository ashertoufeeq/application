module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    'react-native-paper/babel',
    'lodash',
    'react-native-reanimated/plugin'
  ],
  env: {
    production: {
      plugins: [],
    },
  },
};
