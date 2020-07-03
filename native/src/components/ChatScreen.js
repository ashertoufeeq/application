import React from 'react';
import { Touchable, View } from 'framework/surface';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Title } from 'framework/text';
import { useKeyboard } from 'hooks/theme';
import { Dimensions } from 'react-native';

export const ChatScreen = () => {
  const { isKeyboardVisible, keyboardHeight } = useKeyboard();
  const screenHeight = Dimensions.get('window').height - keyboardHeight - 48;

  return (
    <View style={{ height: isKeyboardVisible ? screenHeight : 0 }}>
      <View animateStyle={{ height: isKeyboardVisible ? getStatusBarHeight() : 0 }} />
      <View scroll inverted keyboardShouldPersistTaps='always'>
        <Title>
          Hmmm... 🤔
        </Title>
        <Touchable onPress={() => console.log('jjj')} className='bg-red-200 rounded'>
          <Title>
            Kind of button
          </Title>
        </Touchable>
      </View>
    </View>
  );
};
