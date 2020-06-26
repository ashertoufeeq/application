import React from 'react';
import { Text as RNText } from 'react-native';
import { css } from 'styles';
import { useThemeColors } from 'common/hooks/theme';
import { animated } from 'react-spring/native';

import { BaseStyler } from 'components/BaseStyler';

const AnimatedText = animated(RNText);

export const Text =
  ({ primary, textClass = 'body', className = '', style, ...props }) => {
    const { primary: primaryColor } = useThemeColors();

    return (
      <BaseStyler
        component={AnimatedText}
        style={css({ ...(primary ? { color: primaryColor } : {}) }, `${textClass}`, className, style)}
        {...props} />
    );
  };
