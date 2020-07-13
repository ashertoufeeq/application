import React from 'react';
import { Touchable, View, ScrollView } from 'framework/surface';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Emoji, Title } from 'framework/text';
import { useKeyboard } from 'hooks/theme';
import { Dimensions } from 'react-native';

export const ChatScreen = () => {
  const { isKeyboardVisible, keyboardHeight } = useKeyboard();
  const screenHeight = Dimensions.get('window').height - keyboardHeight - 48;

  return (
    <View style={{ height: isKeyboardVisible ? screenHeight : 0 }}>
      <View animateStyle={{ height: isKeyboardVisible ? getStatusBarHeight() : 0 }} />
      <ScrollView inverted keyboardShouldPersistTaps='always' className='p-4'>
        <Title>
          Hmmm... 
          <Emoji symbol='🤔' label='Thinking...' />
        </Title>
        <Touchable onPress={() => console.log('jjj')} className='bg-red-200 rounded'>
          <Title>
            Kind of button
          </Title>
        </Touchable>
      </ScrollView>
    </View>
  );
};
