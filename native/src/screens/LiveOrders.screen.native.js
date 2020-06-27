import React from 'react';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { View } from 'framework/surface';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const LiveOrdersScreen = () => {
  return (
    <ScreenWrapper>
      <View style={{ height: getStatusBarHeight() }} />
    </ScreenWrapper>
  );
};
