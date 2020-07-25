import React, { useState } from 'react';
import { Dimensions, ActivityIndicator } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { min } from 'lodash-es';

import { Text, LargeTitle, Title2 } from 'framework/text';
import { View, Touchable, ScrollView } from 'framework/surface';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { SearchBar } from 'components/SearchBar.native';
import { StoreHomeImage } from 'components/svg/StoreHomeImage';
import { ProductCard } from 'components/ProductCard';
import { useHttpGet } from 'common/hooks/http';
import { VerticalCard } from "../../components/VerticalCard";

const LoadingComp = ({ loading }) => {
  if (loading)
    return (
      <View className='w-full flex-row align-center justify-center'>
        <ActivityIndicator color='#9575cd' size={30} />
      </View>
    );
  return (
    <View className='p-4'>
      <Touchable
        feedback={false}
        className='bg-primary p-4 rounded-lg'
      // onPress={() => {setLoading(!loading);}}
    >
        <Text className='text-white font-bold'>
          Change loading
        </Text>
      </Touchable>
    </View>
  );}

export const StoreScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { data,loading:productsLoading,error,_fromCache } =
    useHttpGet("/app/products/",{ secure:false });
  const { results } = data || [];
  const RenderItem =()=>{
    return (
      <View className='p-1 m-1 flex-1 '>
        { (results || []).map((result,index)=>(
          <ProductCard
            key={index.toString()}
            id={result.id}
            navigation={navigation}
                  />
        ))}
      </View>
    );
  };

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

  return (
    <ScreenWrapper className='flex-1 w-100'>
      <ScrollView>
        <HeaderComp />
        <RenderItem />
      </ScrollView>
      <SearchBar />
    </ScreenWrapper>
  );
};
