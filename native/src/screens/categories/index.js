import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

// eslint-disable-next-line import/named
import { createStackNavigator } from "@react-navigation/stack";
import { CategoriesScreen } from "./categories.screen";
import { SubCategoriesScreen } from "./subCategories.screen";


const Stack = createStackNavigator();

const MainScreen = () => (
  <Stack.Navigator initialRouteName='Settings' headerMode={null}>
    <Stack.Screen name='categories' component={CategoriesScreen} />
    <Stack.Screen name='subCategories'>
      {props => <SubCategoriesScreen {...props} />}
    </Stack.Screen>
  </Stack.Navigator>
);


export const CategoriesTab = ({ tab: Tab }) => process.env.NODE_ENV === 'development'? (
  <Tab.Screen
    key='categories'
    component={MainScreen}
    name='categories'
    options={{ tabBarIcon: ({ color }) => <Icon color={color} size={25} name='test-tube' /> }}
  />
) : null;
