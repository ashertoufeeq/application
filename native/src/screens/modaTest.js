import React,{useState} from 'react';
import { View, Touchable } from 'framework/surface';
import { Text, LargeTitle, Title2 } from 'framework/text';
import { ProductCard } from 'components/ProductCard';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { styles } from 'styles/default';
import {Dimensions, ScrollView} from 'react-native';


export const ModaTest = ({navigation}) => {
  const [loading,setLoading] =useState(false)
  return (
    <View className={'absolute insetX0 bottom0 borderPrimary borderSolid borderT4 bgWhite'} style={{maxHeight:(Dimensions.get('window').height/2)}}>
      <Title2 primary={false} animation='fadeInLeft' className='p-4 text-gray-600 uppercase'>
        Product Varients
      </Title2>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>

      <View className='px-2'>
        <ProductCard
          navigation={navigation}
          productId={loading ? null : 'xyz3'}
          title='Mr White Detergent powder'
          shortDetails={['🇮🇳', '3kg']}
          price={195}
          size='lg'
          onAddCart={()=>{navigation.navigate('Modal')}}
        />
        <ProductCard
          navigation={navigation}
          productId={loading ? null : 'xyz3'}
          title='Mr White Detergent powder'
          shortDetails={['🇮🇳', '3kg']}
          price={195}
          size='lg'
          onAddCart={()=>{navigation.navigate('Modal')}}
        />
        <ProductCard
          navigation={navigation}
          productId={loading ? null : 'xyz3'}
          title='Mr White Detergent powder'
          shortDetails={['🇮🇳', '3kg']}
          price={195}
          size='lg'
          onAddCart={()=>{navigation.navigate('Modal')}}
        />
      </View>
      </ScrollView>
    </View>
  );
};

