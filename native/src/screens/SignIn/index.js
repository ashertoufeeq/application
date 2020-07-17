import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { SignIn } from 'components/SignIn';

export const TestTab = ({ tab: Tab }) =>  (
  <Tab.ScreenScreen
    key='SignIn'
    component={SignIn}
    name='SignIn'
    options={{ tabBarIcon: ({ color }) => <Icon color={color} size={25} name='test-tube' /> }}
  />
) ;
