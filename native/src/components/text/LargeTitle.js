import React from 'react';
import { Text } from 'components/text/BaseText';
import { useThemeColors } from 'common/hooks/theme';

export const LargeTitle = ({ style, ...props }) => {
  const { primary } = useThemeColors();
  
  return (
    <Text style={[{ color: primary }, style]} textClass='title-large' {...props} />
  );
};
