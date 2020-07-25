import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Touchable } from 'framework/surface';

export const BackButton = ({ onPress }) => (
  <Touchable
    feedback={false}
    className='justify-center align-center m-2'
    onPress={onPress}>
    <Icon size={30} name='arrow-left' color='#000' />
  </Touchable>
);
