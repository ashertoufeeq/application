import React from 'react';
import { View as RNView, ScrollView } from 'react-native';

import { animated } from 'react-spring/native';
import { BaseSurface } from './BaseSurface';


const AnimatedView = animated(RNView);
const AnimatedScrollView = animated(ScrollView);

export const View = ({ scroll, ...props }) => {
  if (scroll)
    return <BaseSurface component={AnimatedScrollView} {...props} />;

  return (
    <BaseSurface component={AnimatedView} {...props} />
  );
};
