import React,{ useState } from 'react';
import { Dimensions } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { min } from 'lodash-es';

import { LargeTitle, Title2, Text } from 'framework/text';
import { View, ScrollView, Touchable } from 'framework/surface';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { SearchBar } from 'components/SearchBar.native';
import { StoreHomeImage } from 'components/svg/StoreHomeImage';
import { ProductCard } from 'components/ProductCard';
import { useHttpList } from 'common/hooks/http';

const HeaderComp = () => (
  <View className='flex-1 '>
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
    <Title2 primary={false} animation='fadeInLeft' className='p-4 text-black uppercase'>
      Daily Essentials
    </Title2>
  </View>
);

export const StoreScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { results, nextPage } = useHttpList('/app/products/', {
    limit: 1,
    secure: true,
    replaceMode: false,
    autoLoad: true,
  });

  return (
    <ScreenWrapper className='flex-1 w-100'>
      <ScrollView>
        <HeaderComp />
        <Touchable onPress={nextPage}>
          <Text>
            Load Next
          </Text>
        </Touchable>
        <View className='p-1 m-1 flex-1 '>
          {(results || []).map((result, index) => (
            <View
              className='my-2'
              key={index.toString()}
            >
              <ProductCard
                size='lg'
                key={index.toString()}
                id={result.id}
                navigation={navigation}
            />
            </View>
          ))}
        </View>
      </ScrollView>
      <SearchBar />
    </ScreenWrapper>
  );
};
