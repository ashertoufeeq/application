import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { BaseSurface } from 'framework/surface/BaseSurface';
import { getColor } from 'styles';

export const TextInput = ({ placeholderTextColor = 'grey-99', ...props }) => (
  <BaseSurface
    placeholderTextColor={getColor(placeholderTextColor)}
    component={RNTextInput}
    {...props} />
);
