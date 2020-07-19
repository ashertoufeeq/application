import { Tailwind } from 'react-native-tailwindcss/tailwind';
// import { useSelector } from 'react-redux';
import _ from 'lodash-es';

import { mergeArrayObject } from 'common/helpers/funcs';
import { useThemeColors } from 'common/hooks/theme';

export const useTailwind = () => {
  const { primary } = useThemeColors();
  // const primary = useSelector(state => state.theme.primaryColor);

  const tailwind = new Tailwind({
    theme: {
      fontFamily: {
        sans: 'Arial',
        serif: 'Georgia',
        mono: 'Courier New',
        body: 'Nunito-Regular',
        bodyBold: 'Nunito-Bold',
        display: 'Montserrat-Bold',
        displayBold: 'Montserrat-ExtraBold',
        displayExtraBold: 'Montserrat-Black',
      },
      extend: {
        colors: {
          primary,
        },
      },
    },
  });

  const { style: t, converter: c, colors } = tailwind;
  const css = (...args) => {
    return mergeArrayObject(
      _.map(args, (arg) => {
        if (_.isString(arg)) return c(arg);
        if (_.isArray(arg)) return css(...arg);
        if (_.isObject(arg)) return arg;
        return {};
      }));
  };
  const getColor = (colorName) => colors[_.camelCase(colorName)];

  return { t, c, css, getColor };
};
