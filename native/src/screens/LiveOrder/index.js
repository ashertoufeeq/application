import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { LiveOrdersScreen } from './LiveOrders.screen';

export const LiveOrderTab = ({ tab: Tab }) => (
  <Tab.Screen
    key='Live Orders'
    component={LiveOrdersScreen}
    name='Live Orders'
    options={{ tabBarIcon: ({ color }) => <Icon color={color} size={25} name='bike' /> }}
  />
);
