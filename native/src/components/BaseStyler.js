import React from 'react';
import { css } from 'styles';


export const BaseStyler = ({ component: Comp, className = '', style = {}, ...props }) =>
  <Comp style={css(className, style)} {...props} />;
