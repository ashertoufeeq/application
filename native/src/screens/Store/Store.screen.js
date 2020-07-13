import React, { useState } from 'react';
import { Dimensions, FlatList, ActivityIndicator, RefreshControl } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { min } from 'lodash-es';

import { Text, LargeTitle, Title2 } from 'framework/text';
import { View, Touchable } from 'framework/surface';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { SearchBar } from 'components/SearchBar.native';
import { StoreHomeImage } from 'components/svg/StoreHomeImage';
import { ProductCard } from 'components/ProductCard';
import { VerticalCard } from "../../components/VerticalCard";

const LoadingComp = ({ loading }) => {
  if (loading)
    return (
      <View className='w-full flex-row align-center justify-center'>
        <ActivityIndicator color='#9575cd' size={30} />
      </View>
    );
  return null;
};

export const StoreScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const initialData = [
    {
      navigation,
      productId: loading ? null : 'xyz',
      title: 'Mr White Detergent powder',
      shortDetails: ['🇮🇳', '3kg'],
      price: 195,
      size: 'sm',
    },
    {
      navigation,
      productId: loading ? null : 'xyz',
      title: 'Mr White Detergent powder',
      shortDetails: ['🇮🇳', '3kg'],
      price: 195,
      size: 'md',
    }, {
      navigation,
      productId: loading ? null : 'xyz',
      title: 'Mr White Detergent powder',
      shortDetails: ['🇮🇳', '3kg'],
      price: 195,
      size: 'lg',
    },
  ];

  const [Data, setData] = useState(initialData);

  const renderItem = ({ item, index }) => (
    <View className='px-2 '>
      <ProductCard
        key={index.toString()}
        {...item} />
    </View>
  );
  const HeaderComp = () => (
    <View className='flex-1'>
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
      <VerticalCard
        navigation={navigation}
        productId={loading ? null : 'xyz3'}
        title='Mr White Detergent powder'
        shortDetails={['🇮🇳', '3kg']}
        price={195}
        size='lg'
        />
    </View>
  );

  return (
    <ScreenWrapper>
      <FlatList
        data={Data}
        ListHeaderComponent={(<HeaderComp />)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        initialNumToRender={2}
        initialScrollIndex={0}
        refreshing={refresh}
        onRefresh={() => {
          setRefresh(true);
          // console.log('refresh')
          // setTimeout(()=>{
          //   setData([{
          //     navigation,
          //     productId:loading ? null : 'xyz',
          //     title:'Mr White Detergent powder',
          //     shortDetails:['🇮🇳', '3kg',],
          //     price:195,
          //     size:'lg',
          //   },])
          //   setRefresh(false)
          // },1000)
        }}

        ListFooterComponent={() => (<LoadingComp loading={refresh} />)}
        onEndReached={(info) => {
          // setRefresh(true);
          setLoading(true);
          setTimeout(() => {
            setData([...Data, ...Data]);
            // setRefresh(false);
          }, 1000);
        }}
      />

      <View className='p-4'>
        <Touchable
          feedback={false}
          className='bg-primary p-4 rounded-lg'
          onPress={() => {
            setLoading(!loading);
            console.log('pressed');
          }}
        >
          <Text className='text-white font-bold'>
            Change loading
          </Text>
        </Touchable>
      </View>
      <SearchBar />
    </ScreenWrapper>
  );
};
