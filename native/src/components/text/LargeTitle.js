import React from 'react';
import { Text } from 'components/text/BaseText';

export const LargeTitle = ({ style, ...props }) =>
  <Text primary textClass='title-large' {...props} />;
