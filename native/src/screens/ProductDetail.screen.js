import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { Title2 } from 'framework/text';
import { View } from 'framework/surface';

export const ProductDetailScreen = ({ route, productId }) => {
  const [product, setProduct] = useState({ ...route.params });
  const id = product.productId || productId;
  const { title, price } = product;

  return (
    <ScreenWrapper title='Product Details'>
      <View style={{ height: getStatusBarHeight() }} />
      <View className='p-4'>
        <Title2 primary={false}>
          {title}
        </Title2>
      </View>
    </ScreenWrapper>
  );
};
