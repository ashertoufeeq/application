import React,{ useState } from 'react';

import { LargeTitle, Title2, Text } from 'framework/text';
import { View, ScrollView, Touchable } from 'framework/surface';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { SearchBar } from 'components/SearchBar.native';
import { useHttpGet, useHttpList } from 'common/hooks/http';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { min } from "lodash-es";
import { Dimensions } from "react-native";
import { CategoriesScreenImage } from "../../components/svg/categories";

const Screen = ({ results ,navigation }) =>{

  return(
    <View className='p-1 m-1 flex-1 '>
      {(results || []).map((result, index) => (
        <Touchable className='flex-row flex-wrap m-1 p-1 bg-gray-100' key={result.name} onPress={()=>{navigation.push('subCategories',{ url:result.representation })}}>
          <Icon color='#000' size={25} name='rocket' />
          <Text className='text-lg ml-3'>
            {result.name}
          </Text>
        </Touchable>
      ))}
    </View>
  );
}

export const CategoriesScreen = ({ navigation }) => {
  const uRl=`/shop/categories/`;
  const { results }=useHttpList(uRl,{
    limit: 5,
    secure: true,
    replaceMode: false,
    autoLoad: true,
  });
  console.log({ results });

  return (
    <ScreenWrapper className='flex-1 w-100'>
      <ScrollView>
        <View className='p-2 px-4'>
          <Title2 animation='fadeInLeft' className='text-primary'>
            Pick your Interest.
          </Title2>
          <View className='py-4'>
            <CategoriesScreenImage
              className='self-center'
              height={min([150, Dimensions.get('window').height / 3])}
              />
          </View>
        </View>
        <Screen {...{ results,navigation }} />
      </ScrollView>
      <SearchBar />
    </ScreenWrapper>
  );
};
