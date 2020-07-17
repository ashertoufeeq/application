import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';

import { ProductDetailScreen } from 'screens/ProductDetail.screen';
import { StoreScreen } from './Store.screen';
import { VariantsModal } from '../variantsModal';
import { modalConfigs } from '../../helpers/modalConfig';



const RootStack = createStackNavigator();
const Stack = createStackNavigator();


const MainStack = () => (
  <Stack.Navigator initialRouteName='StoreHome' headerMode={null}>
    <Stack.Screen name='StoreHome' component={StoreScreen} />
    <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
  </Stack.Navigator>
);


const StoreStack = () => (
  <RootStack.Navigator mode='modal' screenOptions={modalConfigs}>
    <RootStack.Screen
      name='Main'
      component={MainStack}
      headerMode={null}
    />
    <RootStack.Screen
      name='variants'
      component={VariantsModal}
      headerMode={null}
    />
  </RootStack.Navigator>
);

export const StoreTab = ({ tab: Tab }) => (
  <Tab.Screen
    key='Store'
    name='Store'
    options={{ tabBarIcon: ({ color }) => <Icon color={color} size={25} name='store' /> }}
  >
    {() => <StoreStack />}
  </Tab.Screen>
);
