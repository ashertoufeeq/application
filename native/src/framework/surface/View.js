import React from 'react';
import { View as RNView, ScrollView } from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

import { animated } from 'react-spring/native';

import { BaseSurface } from './BaseSurface';


const AnimatedView = animated(RNView);
const AnimatedScrollView = animated(InvertibleScrollView);

export const View = ({ scroll, ...props }) => {
  if (scroll)
    return (
      <BaseSurface
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        component={AnimatedScrollView}
        {...props}
      />
    );

  return (
    <BaseSurface component={AnimatedView} {...props} />
  );
};
