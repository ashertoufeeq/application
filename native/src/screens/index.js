import React from 'react';

import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { useThemeColors } from 'common/hooks/theme';

import { getColor } from 'styles';
import { SettingsTab } from 'screens/Settings';
import { StoreTab } from 'screens/Store';
import { LiveOrderTab } from 'screens/LiveOrder';
import { CartTab } from 'screens/Cart';
import { WishlistTab } from 'screens/Wishlist';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from 'components/SignIn';
import { modalConfigs } from '../helpers/modalConfig';


const Tab = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();

const TabNav =()=>{
  const { primary } = useThemeColors();

  return(
    <Tab.Navigator
      initialRouteName='Store'
      activeColor={primary}
      inactiveColor={getColor('gray-500')}
      barStyle={{ backgroundColor: getColor('gray-100'), borderRadius: 20, elevation: 0 }}
  >
      {/* {TestTab({ tab: Tab })} */}
      {SettingsTab({ tab: Tab })}
      {WishlistTab({ tab: Tab })}
      {StoreTab({ tab: Tab })}
      {LiveOrderTab({ tab: Tab })}
      {CartTab({ tab: Tab })}
    </Tab.Navigator>
  )}

export const Navigator = () => {
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
      <NavigationContainer theme={theme} screenOptions={{ headerShown: false }}>
        <RootStack.Navigator initialRouteName='Main' screenOptions={modalConfigs}>
          <RootStack.Screen
            name='Main'
            component={TabNav}
            headerMode={null}
          />
          <RootStack.Screen
            name='SignIn'
            component={SignInScreen}
            headerMode={null}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
