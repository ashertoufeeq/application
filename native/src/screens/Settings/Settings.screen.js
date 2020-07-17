import React from 'react';
import { ScreenWrapper } from 'components/ScreenWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Touchable } from 'framework/surface';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Headline } from '../../framework/text';

const UserInfo = () =>(
  <View className='p-4 flex-row justify-between items-center border-b border-gray-500'>
    <View className='h-16 w-16 rounded-full bg-gray-500 mx-4' />
    <Touchable className='bg-primary justify-center p-2 rounded mx-2'>
      <Headline className='text-white'>
        Sign In
      </Headline>
    </Touchable>
  </View>
)

export const SettingsScreen = ({ navigation }) => {

  return (
    <ScreenWrapper>
      <View style={{ height: getStatusBarHeight() }} />
      <UserInfo />
      <Touchable
        onPress={()=>navigation.navigate('Addresses')}
        className='p-4 flex-row justify-between items-center border-b border-gray-500'>
        <Headline>
          Manage Addresses
        </Headline>
        <Icon name='chevron-right' color='#000' size={30} />
      </Touchable>
    </ScreenWrapper>
  );
};
