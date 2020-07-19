import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { BaseSurface } from 'framework/surface/BaseSurface';
import { useTailwind } from 'hooks/style';

export const Touchable = ({ scroll, onPress, className, style, feedback = true, ...props }) => {
  const { css } = useTailwind();
  const [isHover, setHover] = useState(false);
  const { hover, ...s } = css(className, style);

  return (
    <BaseSurface
      activeOpacity={feedback ? 0.2 : 1}
      component={TouchableOpacity}
      onPressIn={() => setHover(true)}
      onPressOut={() => setHover(false)}
      onPress={onPress}
      style={{ ...s, ...(isHover ? hover : {}) }}
      {...props}
    />
  );
};
