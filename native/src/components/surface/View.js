import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
// import Animated from 'react-native-reanimated';
// import { useSpring, animated } from 'react-spring';


import { BaseSurface } from 'components/surface/BaseSurface';

export const View = ({ onClick, onPress, scroll, ...props }) => {
  if (onClick || onPress)
    return <BaseSurface onPress={onClick || onPress} component={TouchableOpacity} {...props} />;

  if (scroll)
    return <BaseSurface component={ScrollView} {...props} />;

  return (
    <BaseSurface component={View} {...props} />
  );
};
