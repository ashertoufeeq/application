import React, { useEffect, useState } from 'react';
import { View, Touchable,ScrollView } from 'framework/surface';
import { Text, Title2, Title, Headline } from 'framework/text';
import { Dimensions, Modal } from 'react-native';
import { Shimmer } from 'framework/utils';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { BackButton } from 'components/BackButton';
import _ from 'lodash-es';

const ProductImage = ({ image, loading }) => {
  const heightWidth = 'h-32 w-32';
  return (
    <Shimmer active={loading} className={`${heightWidth}`}>
      <View className={`${heightWidth} bg-gray-400`} />
    </Shimmer>
  );
};


const VarientsTag = ({ loading, setProduct, item,product }) => (
  <Shimmer active={loading} className='h-6'>
    <Touchable
      feedback={false}
      className={`${product.name === item.name?'bg-primary' :'bg-white'} 
      shadow justify-center align-center p-2 rounded-lg m-2`}
      onPress={() => {setProduct(item)}}>
      <Headline className={`${product.name === item.name?'text-white':'text-primary'} text-center`}>
        {item.name}
      </Headline>
    </Touchable>
  </Shimmer>
);

const keyFormatter = (text) =>{
  return text.charAt(0).toUpperCase() + text.replace( /([A-Z])/g, " $1" ).slice(1);
}

export const VariantsModal = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const { results,unit,count,title } = route.params;
  const [product, setProduct] = useState(  results[0]);
  const { name,  price, image, detail } = product;
  const keys = Object.keys(detail);
  return (
    <View
      className='absolute inset-x0 bottom0 border-primary border-solid border-t4 bg-white'
      style={{ height: (Dimensions.get('window').height / 1.5) }}>
      <View className='flex-row'>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }} />
      </View>
      <ScreenWrapper title='Product detail' className='flex-1'>
        <ScrollView>
          <View className='flex-row flex-1 align-center justify-center'>
            <ProductImage {...{ loading,navigation }} />
          </View>
          <View className='h-4' />
          <View className='px-4'>
            <Shimmer active={loading} className='h-6'>
              <Title2 primary={false}>
                {title}
              </Title2>
            </Shimmer>
          </View>
          <View className='px-4 flex-row justify-between items-center'>
            <Shimmer active={loading} className='w-16'>
              <Text primary={false} className='text-black '>
                {name}
              </Text>
              <Title primary={false} className='font-display text-primary '>
                {unit}
                {price}
              </Title>
            </Shimmer>
          </View>
          <View className='h-4' />
          {count>1?(
            <ScrollView horizontal className='flex-row px-4 flex-wrap m-b4'>
              {results.map((item) => (<VarientsTag {...{ loading, setProduct, item,product }} />))}
              <View className='w-8' />
            </ScrollView>
          ):null}
          {
          keys.map(key => (
            <View className='px-4 flex-row justify-start align-center' key={detail[key]}>
              <Shimmer active={loading} className='w-full'>
                <Headline className='text-gray-800 flex-1'>
                  {keyFormatter(key)}
                </Headline>
                <Text className='text-gray-800 flex-1'>
                  {detail[key]}
                </Text>
              </Shimmer>
            </View>
          ))
        }
          <View className='h-24' />
        </ScrollView>
      </ScreenWrapper>
      <Touchable
        feedback={false}
        className='bg-primary p-4 absolute bottom0 right0 left0'
        onPress={() => setLoading(!loading)}
      >
        <Text className='text-white text-center font-bold'>
          Add To Cart
        </Text>
      </Touchable>
    </View>
  );
};

