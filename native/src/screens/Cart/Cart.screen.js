import React from 'react';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { Title } from 'framework/text';
import { View } from 'framework/surface';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cart } = useSelector(state => state.product);
  const keys = Object.keys(cart);

  return (
    <View>
      {keys.map(product => (
        <Title key={product}>
          {product}
          {' -> '}
          {cart[product]}
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
