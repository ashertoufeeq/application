import _ from 'lodash-es';

import { mergeArrayObject } from 'shared/helpers/funcs';
import { color, c } from 'react-native-tailwindcss';

export const getColor = (colorName) => color[_.camelCase(colorName)];

export const css = (...args) =>
  mergeArrayObject(
    _.map(args, (arg) => {
      if (_.isString(arg)) return c(arg);
      if (_.isArray(arg)) return css(...arg);
      if (_.isObject(arg)) return arg;
      return {};
    }));
