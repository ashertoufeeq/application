import { create } from 'tailwind-rn';
import { iOSUIKit } from 'react-native-typography';
import { Platform } from 'react-native';

import _ from 'lodash-es';
import tailwindStyles from '../../styles.json';

const { tailwind, getColor: GetColor } = create(tailwindStyles);

export const getColor = GetColor;

const pseudoClass = {
  'hover': (cn, css) => ({ hover: css(cn) })
};

export const getFontStyleForWeight = (fontFamily, fontWeight) => {
  fontWeight = fontWeight.toString();
  if (Platform.OS === 'ios') { return { fontFamily, fontWeight }; }
  switch (fontWeight) {
    case "normal": return { fontFamily: `${fontFamily}-Regular`, fontWeight: undefined };
    case "bold": return { fontFamily: `${fontFamily}-Bold`, fontWeight: undefined };
    case "100": return { fontFamily: `${fontFamily}-Thin`, fontWeight: undefined };
    case "200": return { fontFamily: `${fontFamily}-ExtraLight`, fontWeight: undefined };
    case "300": return { fontFamily: `${fontFamily}-Light`, fontWeight: undefined };
    case "400": return { fontFamily: `${fontFamily}-Regular`, fontWeight: undefined };
    case "500": return { fontFamily: `${fontFamily}-Medium`, fontWeight: undefined };
    case "600": return { fontFamily: `${fontFamily}-SemiBold`, fontWeight: undefined };
    case "700": return { fontFamily: `${fontFamily}-Bold`, fontWeight: undefined };
    case "800": return { fontFamily: `${fontFamily}-ExtraBold`, fontWeight: undefined };
    case "900": return { fontFamily: `${fontFamily}-Black`, fontWeight: undefined };
    default: {
      return fontFamily
        ? { fontFamily: `${fontFamily}-Regular`, fontWeight: undefined }
        : {};
    }
  }
};


export const fontFactory = (type, fontWeight='400', fontFamily='Nunito') => ({
  ...iOSUIKit[type],
  ...getFontStyleForWeight(fontFamily, fontWeight),
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

export const getPseudoClass = (cn='') => {
  const c = _.split(cn, ':');
  const hasPseudoClass = _.has(pseudoClass, c[0]);
  const match = _.join(_.slice(c, 1), ':');
  return { hasPseudoClass, match, pseudo: c[0] }
};

export const cnToStyles = (cn='') => _.flatten(
  _.map(
    _.split(cn, ' ', ),
    (className) => {
      let styles;
      const { hasPseudoClass, match, pseudo } = getPseudoClass(className);

      if (!className) styles = {};
      else if (hasPseudoClass) styles = pseudoClass[pseudo](match, cnToStyles);
      else if (_.has(extraClasses, className)) styles = extraClasses[className];
      else styles = tailwind(className);
      return styles;
    })
);

export const css = (...args) => {
  const styles = [];
  _.map(args, (arg) => {
    // eslint-disable-next-line no-use-before-define
    if (_.isString(arg)) styles.push(cnToStyles(arg));
    else if (_.isArray(arg)) styles.push(css(...arg));
    else if (_.isObject(arg)) styles.push(arg);
  });

  return _.flatten(styles);
};
