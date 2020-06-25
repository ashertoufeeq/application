import React from 'react';
import { View as RNView, ScrollView } from 'react-native';

import { createAnimatableComponent } from 'react-native-animatable';

import { BaseSurface } from './BaseSurface';


const AnimatedView = createAnimatableComponent(RNView);
const AnimatedScrollView = createAnimatableComponent(ScrollView);

export const View = ({ scroll, ...props }) => {
  if (scroll)
    return <BaseSurface component={AnimatedScrollView} {...props} />;

  return (
    <BaseSurface component={AnimatedView} {...props} />
  );
};
