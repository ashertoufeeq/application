import React from 'react';
import { View as RNView, ScrollView } from 'react-native';

import { BaseSurface } from 'components/surface/BaseSurface';

export const View = ({ scroll, ...props }) => {
  if (scroll)
    return <BaseSurface component={ScrollView} {...props} />;

  return (
    <BaseSurface component={RNView} {...props} />
  );
};
