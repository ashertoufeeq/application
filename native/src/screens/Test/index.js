import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { MonorepoIntro } from 'components/examples/MonorepoIntro';
import { GetLocation } from 'components/GetLocation';

export const TestTab = ({ tab: Tab }) => process.env.NODE_ENV === 'development'? (
  <Tab.ScreenScreen
    key='Test'
    component={GetLocation}
    name='Test'
    options={{ tabBarIcon: ({ color }) => <Icon color={color} size={25} name='test-tube' /> }}
  />
) : null;
