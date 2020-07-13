import React from 'react';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { Title ,Text } from 'framework/text';
import { View } from 'framework/surface';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSelector } from 'react-redux';
import _ from 'lodash-es';

const Cart = () => {
  console.log("we enter cart");
  const { cart } = useSelector(state => state.product);
  const keys = Object.keys(cart);
  console.log({ cart, keys });

  return (
    <View className='h-12 w-auto bg-gray-100'>
      <Text>
        Keys Lenght:
        {keys.length}
      </Text>
      {keys.map((key, index) =>(
        <Title className='bg-red-100' key={index.toString()}>

          {key}
          {/* {' -> '} */}
          {/* {cart[key].unit} */}
        </Title>
      ))}
    </View>
  );
};

export const CartScreen = () => {
  return (
    <ScreenWrapper title='Cart Screen'>
      <View style={{ height: getStatusBarHeight() }} />
      <View className='p-4'>
        <Title>
          Cart UI
        </Title>
        <Cart />
      </View>
    </ScreenWrapper>
  );
};
