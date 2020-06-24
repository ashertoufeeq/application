import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useThemeColors } from 'common/hooks/theme';
import { useUser } from 'common/hooks/auth';

import { SettingsScreen } from 'screens/Settings.screen.native';
import { StoreScreen } from 'screens/Store.screen.native';
import { WishlistScreen } from 'screens/Wishlist.screen.native';
import { LiveOrdersScreen } from 'screens/LiveOrders.screen.native';
import { CartScreen } from 'screens/Cart.screen.native';
import { MonorepoIntro } from 'components/examples/MonorepoIntro';
import { css } from 'styles';
import { Image } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const Navigator = () => {
  const { primary } = useThemeColors();
  const { user: { image: dp } } = useUser();
  
  const tabs = [{
    name: 'Test',
    component: MonorepoIntro,
    icon: 'test-tube',
  }, {
    name: 'Settings',
    component: SettingsScreen,
    icon: 'face',
    customIcon: dp?  (
      <Image
        style={css('rounded-full self-center h-6 w-6')}
        source={{
          uri: dp
        }}
        alt="Woman's Face"
      />
    ) : null
  }, {
    name: 'Store',
    component: StoreScreen,
    icon: 'store',
  }, {
    name: 'Wishlist',
    component: WishlistScreen,
    icon: 'heart',
  }, {
    name: 'Live Orders',
    component: LiveOrdersScreen,
    icon: 'bike',
  }, {
    name: 'Cart',
    component: CartScreen,
    icon: 'cart-outline',
  }];
  
  const theme = {
    dark: false,
    colors: {
      primary,
      background: '#FFFFFF',
      card: '#FFFFFF',
      text: '#999999',
      border: 'rgba(255, 255, 255, 0)',
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme} screenOptions={{ headerShown: false }}>
        <Tab.Navigator
          initialRouteName='Store'
          activeColor={primary}
          inactiveColor='#999999'
          barStyle={{ backgroundColor: '#FAFAFA', borderRadius: 20, elevation: 0 }}
        >
          {tabs.map(({ name, icon, component, customIcon }) => (
            <Tab.Screen
              key={name}
              options={{
                tabBarIcon: ({ color }) => customIcon || <Icon color={color} size={25} name={icon} />,
              }}
              name={name}
              component={component}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
