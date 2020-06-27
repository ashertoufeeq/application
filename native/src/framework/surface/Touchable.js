import React, { useState } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { BaseSurface } from 'framework/surface/BaseSurface';
import { css } from 'styles';

export const Touchable = ({ scroll, onPress, className, style, feedback=true, ...props }) => {
  const [isHover, setHover] = useState(false);
  const { hover, ...s } = css(className, style);
  const Comp = feedback? TouchableOpacity : TouchableWithoutFeedback;

  return (
    <BaseSurface
      component={Comp}
      onPressIn={() => setHover(true)}
      onPressOut={() => setHover(false)}
      onPress={onPress}
      style={{ ...s, ...(isHover ? hover : {}) }}
      {...props}
    />
  );
};
