import React from 'react';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, TextInput } from 'components/surface';


export const SearchBar = () => (
  <>
    <View className='bg-grey-fa h-12 flex-row'>
      <TextInput
        placeholder='Hi Faisal, What do you need?'
        className='flex-1 text-gray-800 text-lg self-center px-4'
    />
      <View
        className='rounded-full h-12 w-12 mx-4 flex-row justify-center items-center relative z-10 bg-primary'
        style={{ bottom: 24 }}
      >
        <MaterialIcons name='filter-list' size={24} color='white' />
      </View>
    </View>
    <KeyboardSpacer />
  </>
);
