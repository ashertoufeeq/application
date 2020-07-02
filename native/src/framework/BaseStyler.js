import React, { useEffect } from 'react';
import { css } from 'styles';

import { useSpring } from 'react-spring/native';

export const BaseStyler = ({
  component: Comp,
  animateConfig = {},
  animate = '', animateStyle = {},
  className = '', style = {}, ...props
}) => {
  const baseStyle = css(className, style);
  const [animatedStyle, animateTo, stopAnimation] =
    useSpring(() => ({ ...css(animate, animateStyle), ...animateConfig }));

  useEffect(() => {
    animateTo(css(animate, animateStyle));
    return () => {
      stopAnimation();
    };
  }, [animate, animateStyle]);

  return <Comp style={[baseStyle, animatedStyle]} {...props} />;
};
