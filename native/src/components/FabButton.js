import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'framework/surface';

export const FabButton = () => (
  <View
    className='rounded-full h-12 w-12 mx-4 flex-row justify-center items-center relative z-10 bg-primary'
  >
    <Icon name='filter-variant' size={24} color='white' />
  </View>
);
