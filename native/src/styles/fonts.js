import _ from 'lodash-es';
import { iOSUIKit } from 'react-native-typography';
import { isAndroid } from 'helpers/device';

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
  ..._.omit(iOSUIKit[type], ['color']), ...(
    isAndroid ?
      { fontFamily: `${fontFamily}-${fontTypeMap[fontWeight.toString()]}`, fontWeight: undefined } :
      { fontFamily, fontWeight: fontWeight.toString() }
  ),
});

export const fontStyles = {
  'title-large': fontFactory('largeTitleEmphasized', 900, 'Montserrat'),
  'title-emphasized': fontFactory('title3Emphasized', 800, 'Montserrat'),
  'title': fontFactory('title3', 700, 'Montserrat'),
  'body': fontFactory('body', 400, 'Nunito'),
  'body-emphasized': fontFactory('bodyEmphasized', 700, 'Nunito'),
  'sub-header-emphasized': fontFactory('subhead', 700, 'Nunito'),
  'sub-header': fontFactory('subheadShort', 400, 'Nunito'),
  'foot-note-emphasized': fontFactory('footnoteEmphasized', 700, 'Nunito'),
  'foot-note': fontFactory('footnote', 400, 'Nunito'),
};
