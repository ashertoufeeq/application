import { create } from 'tailwind-rn';

import _ from 'lodash-es';
import { iOSUIKit } from 'react-native-typography';

import { isAndroid } from 'helpers/device';
import tailwindStyles from '../../styles.json';

const { tailwind, getColor: GetColor } = create(tailwindStyles);

export const getColor = GetColor;
const mergeArrayObject = (arr) => {
  let newObj = {};
  arr.map(ar => { newObj = _.merge(newObj, ar); return null; });
  return newObj;
};

const fontTypeMap = {
  'normal': 'Regular',
  'bold': 'Bold',
  '100': 'Thin',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
};

export const fontFactory = (type, fontWeight, fontFamily) => ({
  ...iOSUIKit[type], ...(
    isAndroid ?
      { fontFamily: `${fontFamily}-${fontTypeMap[fontWeight.toString()]}`, fontWeight: undefined } :
      { fontFamily, fontWeight: fontWeight.toString() }
  ),
});

const extraClasses = {
  'title-large': fontFactory('largeTitleEmphasized', 900, 'Montserrat'),
  'title-emphasized': fontFactory('title3Emphasized', 800, 'Montserrat'),
  'title': fontFactory('title3', 700, 'Montserrat'),
  'body': fontFactory('body', 400, 'Nunito'),
  'sub-header-emphasized': fontFactory('subhead', 700, 'Nunito'),
  'sub-header': fontFactory('subheadShort', 400, 'Nunito'),
  'foot-note-emphasized': fontFactory('footnoteEmphasized', 700, 'Nunito'),
  'foot-note': fontFactory('footnote', 400, 'Nunito'),
};

const pseudoClass = {
  'hover': (cn, css) => ({ hover: css(cn) })
};

export const getPseudoClass = (cn='') => {
  const c = cn.split(':');
  const hasPseudoClass = _.has(pseudoClass, c[0]);
  const match = _.join(_.slice(c, 1), ':');
  return { hasPseudoClass, match, pseudo: c[0] }
};

const cnToStyle = (cn = '') => mergeArrayObject(
  _.map(
    _.split(cn, ' ', ),
    (className) => {
      const { hasPseudoClass, match, pseudo } = getPseudoClass(className);

      if (!className) return {};
      if (hasPseudoClass) return pseudoClass[pseudo](match, cnToStyle);
      if (_.has(extraClasses, className)) return  extraClasses[className];
      return  tailwind(className);
    }));


export const css = (...args) => 
  mergeArrayObject(
    _.map(args, (arg) => {
    // eslint-disable-next-line no-use-before-define
      if (_.isString(arg)) return cnToStyle(arg);
      if (_.isArray(arg)) return css(...arg);
      if (_.isObject(arg)) return arg;
      return {}
    }));
