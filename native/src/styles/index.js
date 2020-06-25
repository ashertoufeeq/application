import { create } from 'tailwind-rn';

import _ from 'lodash-es';

import { mergeArrayObject } from 'shared/helpers/funcs';

import { fontStyles } from './fonts';

import tailwindStyles from '../../styles.json';

const { tailwind, getColor: GetColor } = create(tailwindStyles);

export const getColor = GetColor;

const extraClasses = {
  ...fontStyles
};

const pseudoClass = {
  'hover': (cn, css, context) => ({ hover: css(`${context} ${cn}`) }),
};

export const getPseudoClass = (cn = '') => {
  const c = cn.split(':');
  const hasPseudoClass = _.has(pseudoClass, c[0]);
  const match = _.join(_.slice(c, 1), ':');
  return { hasPseudoClass, match, pseudo: c[0] };
};

const cnToStyle = (cn = '') => mergeArrayObject(
  _.map(
    _.split(cn, ' '),
    (className) => {
      let style;
      const { hasPseudoClass, match, pseudo } = getPseudoClass(className);

      if (!className) style = {};
      else if (hasPseudoClass) style = pseudoClass[pseudo](match, cnToStyle, cn);
      else if (_.has(extraClasses, className)) style = extraClasses[className];
      else style = tailwind(className);
      
      [].map((func) => style = func(style));
      return style;
    }));

export const css = (...args) =>
  mergeArrayObject(
    _.map(args, (arg) => {
      if (_.isString(arg)) return cnToStyle(arg);
      if (_.isArray(arg)) return css(...arg);
      if (_.isObject(arg)) return arg;
      return {};
    }));
