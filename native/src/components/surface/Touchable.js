import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { BaseSurface } from 'components/surface/BaseSurface';
import { css } from 'styles';

import { View } from './View';

export const Touchable = ({ scroll, onPress, className, style, ...props }) => {
  const [isHover, setHover] = useState(false);
  const { hover, ...s } = css(className, style);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setHover(true)}
      onPressOut={() => setHover(false)}
      onPress={onPress}>
      <BaseSurface
        style={{ ...s, ...(isHover ? hover : {}) }}
        component={View}
        {...props}
      />
    </TouchableWithoutFeedback>
  );
};
