import React, { useEffect } from 'react';
import { css } from 'styles';

import { useSpring } from 'react-spring/native';
import _ from 'lodash-es';


export const BaseStyler = ({
  component: Comp,
  animated = [], springConfig = {},
  className = '', style = {}, ...props
}) => {

  const a = _.isString(animated) ? [animated] : animated;
  const c = css(className, style);
  const baseStyle = _.omit(c, a);
  const animatedStyle = _.pick(c, a);
  const jsonAnimatedStyle = JSON.stringify(animatedStyle);
  const [s, set, stop] = useSpring(() => ({ ...animatedStyle, ...springConfig }));

  useEffect(() => {
    return () => {
      stop();
    }
  }, []);

  useEffect(() => {
    set(animatedStyle);
  }, [jsonAnimatedStyle]);

  return <Comp style={{ ...baseStyle, ...s }} {...props} />;
};
