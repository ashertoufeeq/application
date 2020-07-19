import React from 'react';

import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { useThemeColors } from 'common/hooks/theme';

import { TestTab } from 'screens/Test';
import { SettingsTab } from 'screens/Settings';
import { StoreTab } from 'screens/Store';
import { LiveOrderTab } from 'screens/LiveOrder';
import { CartTab } from 'screens/Cart';
import { WishlistTab } from 'screens/Wishlist';
import { useTailwindSetup, TailwindProvider } from 'hooks/style';

const Tab = createMaterialBottomTabNavigator();

export const Navigator = () => {
  const { t, c, css, getColor } = useTailwindSetup();
  const { primary } = useThemeColors();

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
      <TailwindProvider value={{ t, c, css, getColor }}>
        <NavigationContainer theme={theme} screenOptions={{ headerShown: false }}>
          <Tab.Navigator
            initialRouteName='Store'
            activeColor={primary}
            inactiveColor={getColor('gray-500')}
            lazy={false}
            barStyle={{ backgroundColor: getColor('gray-100'), borderRadius: 20, elevation: 0 }}
        >
            {TestTab({ tab: Tab })}
            {SettingsTab({ tab: Tab })}
            {WishlistTab({ tab: Tab })}
            {StoreTab({ tab: Tab })}
            {LiveOrderTab({ tab: Tab })}
            {CartTab({ tab: Tab })}
          </Tab.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </SafeAreaProvider>
  );
};
