import React, { useState } from 'react';
import { ScreenWrapper } from 'components/ScreenWrapper';

import { View, Touchable } from 'framework/surface';
import { Text } from 'framework/text';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const SettingsScreen = () => {
  const [hmmm, setHmmm] = useState(true);

  return (
    <ScreenWrapper>
      <View style={{ height: getStatusBarHeight() }} />
      <Touchable feedback={false} onPress={() => setHmmm(!hmmm)}>
        <View
          animate={hmmm ? 'p-4 h-32 bg-red-200' : 'p-4 h-56 bg-green-200'}
        >
          <Text
            animated={['fontSize', 'color']}
            animate={hmmm ? 'font-display-bold text-base text-red-900' : 'font-display-bold text-4xl text-green-900'}>
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
