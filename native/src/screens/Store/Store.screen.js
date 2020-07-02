import React, { useState } from 'react';

import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { min } from 'lodash-es';

import { Text, LargeTitle, Title2 } from 'framework/text';
import { View, Touchable } from 'framework/surface';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { SearchBar } from 'components/SearchBar.native';
import { StoreHomeImage } from 'components/svg/StoreHomeImage';
import { ProductCard } from 'components/ProductCard';


export const StoreScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <ScreenWrapper>
      <View scroll className='flex-1'>
        <View className='bg-grey-100'>
          <View style={{ height: getStatusBarHeight() }} />
          <View className='px-4'>
            <LargeTitle animation='fadeInLeft'>
              Khan store.
            </LargeTitle>
            <View className='py-4'>
              <StoreHomeImage
                className='self-center'
                height={min([150, Dimensions.get('window').height / 3])}
              />
            </View>
          </View>
        </View>
        <Title2 primary={false} animation='fadeInLeft' className='p-4 text-gray-600 uppercase'>
          Daily Essentials
        </Title2>

        <View className='px-2'>
          <ProductCard
            navigation={navigation}
            productId={loading ? null : 'xyz'}
            title='Mr White Detergent powder'
            shortDetails={['🇮🇳', '3kg']}
            price={195}
            size='sm'
          />
          <ProductCard
            navigation={navigation}
            productId={loading ? null : 'xyz2'}
            title='Mr White Detergent powder'
            shortDetails={['🇮🇳', '3kg']}
            price={195}
            size='md'
          />
          <ProductCard
            navigation={navigation}
            productId={loading ? null : 'xyz3'}
            title='Mr White Detergent powder'
            shortDetails={['🇮🇳', '3kg']}
            price={195}
            size='lg'
          />
        </View>

        <View className='p-4'>
          <Touchable
            feedback={false}
            className='bg-primary p-4 rounded-lg'
            onPress={() => setLoading(!loading)}
          >
            <Text className='text-white font-bold'>
              Change loading
            </Text>
          </Touchable>
        </View>

      </View>
      <SearchBar />
    </ScreenWrapper>
  );
};
