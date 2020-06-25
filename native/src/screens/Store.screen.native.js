import React, { useState } from 'react';

import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useDispatch } from 'react-redux';
import { min } from 'lodash-es';

import { resetState } from 'common/actions/demo';
import { changePrimaryColor } from 'common/actions/theme';

import { getColor } from 'styles';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { SearchBar } from 'components/SearchBar.native';
import { StoreHomeImage } from 'components/image/StoreHomeImage';
import { Text, Title, LargeTitle } from 'components/text';
import { View, Touchable } from 'components/surface';
import { ProductCard } from 'components/ProductCard';


const AnimationTest = () => {
  const [base, toggle] = useState(false);

  return (
    <Touchable onPress={() => toggle(!base)}>
      <View duration={5000} animation='zoomOut' className={`w-48 h-48 ${base ? 'bg-red-600' : 'bg-black'}`}>
        <Text>
          Hello...
        </Text>
      </View>
    </Touchable>
  );
};

export const StoreScreen = () => {
  const dispatch = useDispatch();

  return (
    <ScreenWrapper>
      <View scroll className='flex-1'>
        <View className='bg-grey-fa'>
          <View style={{ height: getStatusBarHeight() }} />
          <View className='px-4'>
            <View className='py-4'>
              <StoreHomeImage
                className='self-center'
                height={min([150, Dimensions.get('window').height / 3])}
              />
            </View>
            <LargeTitle animation='fadeInLeft'>
              Khan store.
            </LargeTitle>
          </View>
        </View>

        <Text animation='fadeInLeft' className='body-emphasized p-4 text-grey-66 uppercase'>
          Daily Essentials
        </Text>

        <View className='p-2'>
          <ProductCard />
        </View>
      </View>
      <SearchBar />
    </ScreenWrapper>
  );
};
