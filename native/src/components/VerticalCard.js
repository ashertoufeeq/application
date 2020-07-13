import React from 'react';
import { View,Touchable } from 'framework/surface';
import { Text,Title1,Headline,Title } from 'framework/text';
import { Shimmer } from 'framework/utils';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART,RESET_STATE } from 'shared/actions';

const CardHeader = ({ title,loading,size,productId }) => {
  const TitleComp=size==='sm'?Title:Title1;
  return(
    <Shimmer active={loading}>
      <TitleComp className={`${size === 'sm' ? 'font-display' : 'text-display-bold'}`}>
        {title}
        {' '}
        friction
      </TitleComp>
    </Shimmer>
  );
}

const PriceLabel = ({ loading,description,size }) => {
  const TitleComp = size === 'sm' ? Title : Title1;

  return (
    <Shimmer active={loading} className='w-1/2'>
      <View className='flex-wrap'>
        {size === 'sm' ? null : (
          <View className='flex-1 flex-row py-1'>
            {description.map((detail, index) => (
              <Text className='text-gray-600 px-1' key={index.toString()}>
                {detail}
              </Text>
            ))}
          </View>
        )}
      </View>
    </Shimmer>
  );
}

const AddToCartAction = ({ title,image,productId ,status,onAddCart }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    console.log(productId);
    dispatch({
      type: ADD_TO_CART,
      payload:{
        title,
        image,
        productId,
      }
    })
  };
  return (
    <Touchable className='bg-primary justify-center p-2 rounded mx-2' onPress={addToCart}>
      <Headline className='text-white'>
        Add Item
      </Headline>
    </Touchable>
  );
}

const Actions = ({ title,image,productId, loading ,unit,price,size,onAddCart }) => (
  <Shimmer active={loading} className='h-8'>
    <View className='flex-row flex-wrap justify-around'>
      <PriceButton {...{ unit,price,size }} />
      <AddToCartAction {...{ title,image,productId,onAddCart }} />
    </View>
  </Shimmer>
);
const ProductImage = ({ image,loading,size })=> {
  let heightWidth='';
  if (size === 'lg') heightWidth = 'h-32 w-32';
  if (size === 'md') heightWidth = 'h-24 w-24';
  if (size === 'sm') heightWidth = 'h-20 w-20';

  return(
    <Shimmer active={loading} className={`${heightWidth} rounded-lg m-0 ml-auto mr-auto`}>
      <View className={`${heightWidth} bg-gray-400 rounded-lg ml-auto mr-auto`} />
    </Shimmer>
  );
}
const PriceButton = ({ unit,price,size }) => {
  const TitleComp = size === 'sm' ? Title : Title1;
  return (
    <View className='flex'>
      <TitleComp primary className={`${size === 'sm' ? '' : 'mx-2'} font-display mt-auto mb-auto`}>
        {unit}
        {price}
      </TitleComp>
    </View>
  );
}

export const VerticalCard = (props) => {
  const {
    productId,title,price,unit='$',
    shortDetails,image,size='md',navigation,onAddCart
  }=props;
  const loading=!productId;
  const navigate = () => {
    if (!loading) {
      navigation.navigate(
        'ProductDetail',
        { productId, title, price, unit, shortDetails, image },
      );
    }
  };
  return(
    <View className={`p-2 bg-white rounded-lg w-64 ${size === 'lg' ? 'shadow-lg my-4' : ''} ${size === 'md' ? 'my-1' : ''}`}>
      <Touchable feedback={false} onPress={navigate}>
        <ProductImage {...{ image,loading,size }} />
        <View className='px-2'>
          <CardHeader {...{ title, loading, size, productId }} />
          <PriceLabel {...{ description: shortDetails, loading, size }} />
        </View>
      </Touchable>
      {size === 'lg' ? <Actions {...{ title,image,productId, loading,unit,price,onAddCart }} /> : null}
    </View>
  );
}


