import React, { useEffect } from 'react';
import { css } from 'styles';

import { useSpring } from 'react-spring/native';
import _ from 'lodash-es';


export const BaseStyler = ({
  component: Comp,
  animated = [], springConfig = {},
  className = '', style = {}, ...props
}) => {

  const c = css(className, style);
  const [s, set, stop] = useSpring(() => ({ ..._.pick(c, animated), ...springConfig }));

  useEffect(() => {
    set(_.pick(c, animated));
    return () => {
      stop();
    };
  }, [c]);

  return <Comp style={[c, s]} {...props} />;
};
