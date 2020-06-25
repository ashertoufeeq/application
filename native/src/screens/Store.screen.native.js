import React from 'react';

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
import { View } from 'components/surface';

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
            <LargeTitle>
              Khan store.
            </LargeTitle>
          </View>
        </View>

        <Title className='p-4 text-grey-66 uppercase'>
          Daily Essentials
        </Title>

        <View className='p-2'>
          <View>
            {['gray', 'red', 'green', 'blue']
              .map(color => (
                <View className='flex-row flex-wrap' key={color}>
                  {['500', '600', '700', '800', '900']
                    .map(weight => (
                      <View
                        key={`${color}-${weight}`}
                        onPress={() => dispatch(changePrimaryColor(getColor(`${color}-${weight}`)))}
                        className={`bg-${color}-${weight} h-10 w-10 m-2 rounded-lg hover:h-24 hover:w-24`}
                      />
                    ))}
                </View>
              ))}
          </View>

          <View onPress={() => dispatch(resetState())}>
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
