import React from 'react';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { resetState } from 'shared/actions/demo';
import { useDispatch } from 'react-redux';

import { SearchBar } from 'components/SearchBar.native';
import { StoreHomeImage } from 'components/image/StoreHomeImage';
import { Text, Title, LargeTitle } from 'components/text';
import { View } from 'components/surface';

export const StoreScreen = () => {
  const dispatch = useDispatch();

  return (
    <ScreenWrapper>
      <View scroll className='flex-1'>
        <View className='bg-grey-fa'>
          <View style={{ height: getStatusBarHeight() }} />
          <View className='p-4'>
            <View className='p-8'>
              <StoreHomeImage className='self-center' height={200}  />
            </View>
            <LargeTitle>
              Khan store.
            </LargeTitle>
          </View>
        </View>

        <Title className='p-4 text-grey-66 uppercase'>
          Daily Essentials
        </Title>

        <View className='p-2'>
          <View onClick={() => dispatch(resetState())}>
            <Text className='text-red-500'>
              Click reset the state.
            </Text>
          </View>
        </View>
      </View>
      <SearchBar />
    </ScreenWrapper>
  );
};
