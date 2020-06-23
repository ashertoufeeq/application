import React from 'react';
import { Text as RNText } from 'react-native';
import { css } from 'styles';

export const Text = ({ title='', textClass='body', className='', style, children, ...props }) => (
  <RNText style={css(`${textClass}`, className, style)} {...props}>
    {title}
    {children}
  </RNText>
);
