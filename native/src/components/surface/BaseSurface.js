import React from 'react';
import { css } from 'styles';

export const BaseSurface = ({ component: Comp, children, className, style, ...props }) => {
  if (!className) className = '';

  return (
    <Comp style={css(className, style)} {...props}>
      {children}
    </Comp>
  );
};
