import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { LiveOrdersScreen } from './LiveOrders.screen';
import { modalConfigs } from '../../helpers/modalConfig';
import { OrderTimelineScreen } from './OrderTimeline.screen';


const RootStack = createStackNavigator();
const Stack = createStackNavigator();


const MainStack = () => (
  <Stack.Navigator initialRouteName='StoreHome' headerMode={null}>
    <Stack.Screen name='Live Orders' component={LiveOrdersScreen} />
    <Stack.Screen name='OrderTimeline' component={OrderTimelineScreen} />
  </Stack.Navigator>
);


const LiveOrdersStack = () => (
  <RootStack.Navigator mode='modal' screenOptions={modalConfigs}>
    <RootStack.Screen
      name='Main'
      component={MainStack}
      headerMode={null}
    />
  </RootStack.Navigator>
);

export const LiveOrderTab = ({ tab: Tab }) => (
  <Tab.Screen
    key='Live Orders'
    component={MainStack}
    name='Live Orders'
    options={{ tabBarIcon: ({ color }) => <Icon color={color} size={25} name='bike' /> }}
  />
);
