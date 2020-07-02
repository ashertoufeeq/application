import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { CartScreen } from './Cart.screen';

export const CartTab = ({ tab: Tab }) => (
  <Tab.Screen
    key='Cart'
    component={CartScreen}
    name='Cart'
    options={{ tabBarIcon: ({ color }) => <Icon color={color} size={25} name='cart' /> }}
  />
);
