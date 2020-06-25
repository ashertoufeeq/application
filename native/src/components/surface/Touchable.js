import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { View } from 'components/surface/View';
import { css } from 'styles';

export const Touchable = ({ onPress, className, style, ...props }) => {
  const [isHover, setHover] = useState(false);
  const { hover = {}, ...s } = css(className, style);
  console.log(s);

  return (
    <TouchableWithoutFeedback onPressIn={() => setHover(true)} onPressOut={() => setHover(false)} onPress={onPress}>
      <View style={{ ...s, ...(isHover? hover : {}) }} {...props} />
    </TouchableWithoutFeedback>
  );
};
