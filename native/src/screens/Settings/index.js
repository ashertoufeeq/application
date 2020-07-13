import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Image } from 'react-native';

import { useUser } from 'common/hooks/auth';
import { SettingsScreen } from './Settings.screen';

export const SettingsTab = ({ tab: Tab }) => {
  const { user: { image: dp }, isAuthenticated } = useUser();

  return (
    <Tab.Screen
      key='Settings'
      component={SettingsScreen}
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
