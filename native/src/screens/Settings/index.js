import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { useUser } from 'common/hooks/auth';

import { SettingsScreen } from './Settings.screen';

import { Image } from 'react-native';
import { css } from 'web/src/styles';

export const SettingsTab = ({ tab: Tab }) => {
  const { user: { image: dp } } = useUser();

  return (
    <Tab.Screen
      key='Settings'
      component={SettingsScreen}
      name='Settings'
      options={{
        tabBarIcon: ({ color }) => dp ? (
          <Image
            style={css('rounded-full self-center h-6 w-6')}
            source={{ uri: dp }}
            alt="Woman's Face"
          />
        ) : <Icon color={color} size={25} name='face' />,
      }}
    />
  );
};
