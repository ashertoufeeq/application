import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { WishlistScreen } from './Wishlist.screen';

export const WishlistTab = ({ tab: Tab }) => (
  <Tab.Screen
    key='Wishlist'
    component={WishlistScreen}
    name='Wishlist'
    options={{ tabBarIcon: ({ color }) => <Icon color={color} size={25} name='heart' /> }}
  />
);
