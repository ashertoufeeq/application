import React from 'react';

import { View, Touchable } from 'components/surface';
import { Text, Title, LargeTitle } from 'components/text';

export const ProductCard = () => (
  <View
    className='p-2 border-gray-100 rounded-lg bg-white'
    style={{
      shadowColor: '#0007',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    }}>
    <View className='flex-row'>
      <View style={{ width: 125, height: 125 }} className='bg-gray-400 rounded-lg' />

      <View className='flex-1 ml-4'>

        <View>
          <Title className='text-gray-800'>
            Mr White Detergent powder
          </Title>

          <View className=''>
            <Text className='text-gray-600'>
              🇮🇳 3 kg
            </Text>
          </View>
        </View>

        <View className='pt-4'>
          <Title className='text-gray-900' style={{ fontSize: 24 }}>
            ₹195
          </Title>

          <Touchable className='bg-primary rounded-lg'>
            <Title className='text-white p-2 text-center'>
              Add to Cart
            </Title>
          </Touchable>
        </View>

      </View>
    </View>
  </View>
);
