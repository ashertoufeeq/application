import React from 'react';

import { View, TextInput } from 'framework/surface';

import { FabButton } from 'components/FabButton';
import { ChatScreen } from 'components/ChatScreen';
import { useKeyboard } from 'hooks/theme';

export const SearchBar = () => {
  const { keyboardHeight } = useKeyboard();
  
  return (
    <>
      <ChatScreen />
      <View className='bg-gray-100 h-12 flex-row'>
        <TextInput
          placeholderTextColor='gray-500'
          placeholder='Hi Faisal, What do you need?'
          className='flex-1 text-gray-900 text-lg self-center px-4'
        />
        <View style={{ bottom: 24 }}>
          <FabButton />
        </View>
      </View>
      <View className='bg-gray-100' animateStyle={{ height: keyboardHeight }} />
    </>
  );
};
