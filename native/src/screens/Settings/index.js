import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Image } from 'react-native';

import { useUser } from 'common/hooks/auth';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from './Settings.screen';
import { AddressesScreen } from './Addresses.screen';


const Stack = createStackNavigator();


const MainStack = () => (
  <Stack.Navigator initialRouteName='Settings' headerMode={null}>
    <Stack.Screen name='Settings' component={SettingsScreen} />
    <Stack.Screen name='Addresses' component={AddressesScreen} />
  </Stack.Navigator>
);


export const SettingsTab = ({ tab: Tab }) => {
  const { user: { image: dp }, isAuthenticated } = useUser();

  return (
    <Tab.Screen
      key='Settings'
      component={MainStack}
      name='Settings'
      options={{
        tabBarIcon: ({ color }) => isAuthenticated ? (
          <Image
            style={{ width: 25, height: 25, borderRadius: 12.5 }}
            source={{ uri: dp }}
            alt="Woman's Face"
          />
        ) : <Icon color={color} size={25} name='face' />,
      }}
    />
  );
};
