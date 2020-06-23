import React from 'react';
import { View as RNView, TouchableOpacity, ScrollView } from 'react-native';

import { BaseSurface } from 'components/surface/BaseSurface';

export const View = ({ onClick, onPress, scroll, ...props }) => {
  if (onClick || onPress)
    return <BaseSurface onPress={onClick || onPress} component={TouchableOpacity} {...props} />;

  if (scroll)
    return <BaseSurface component={ScrollView} {...props} />;

  return (
    <BaseSurface component={RNView} {...props} />
  );
};
