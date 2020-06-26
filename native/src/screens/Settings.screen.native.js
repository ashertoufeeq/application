import React, { useState } from 'react';
import { ScreenWrapper } from 'components/ScreenWrapper';

import { View, Touchable } from 'components/surface';
import { Text } from 'components/text';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const SettingsScreen = () => {
  const [hmmm, setHmmm] = useState(true);

  return (
    <ScreenWrapper>
      <View style={{ height: getStatusBarHeight() }} />
      <Touchable onPress={() => setHmmm(!hmmm)}>
        <View
          animated={['width', 'backgroundColor', 'height']}
          className={hmmm ? 'p-4 bg-red-200 h-24' : 'p-4 bg-green-200 h-48'}
        >
          <Text
            animated={['fontSize', 'color']}
            className={hmmm ? 'title text-red-900' : 'text-green-900 title-large'}>
            Hi React Native
          </Text>
          <Text>
            Custom designed tailwind animation view 🤔
          </Text>
        </View>
      </Touchable>
    </ScreenWrapper>
  );
};
