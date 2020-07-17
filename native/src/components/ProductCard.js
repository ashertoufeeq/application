import React from 'react';

import { View, Touchable } from 'framework/surface';
import { Text, Title1, Headline, Title } from 'framework/text';
import { Shimmer } from 'framework/utils';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from 'shared/actions';

const CardHeader = ({ title, loading, size, productId }) => {
  const TitleComp = size === 'sm' ? Title : Title1;
  return (
    <Shimmer active={loading} className={`${size === 'sm' ? 'h-6' : 'h-12'}`}>
      <TitleComp className={`${size === 'sm' ? 'font-display' : 'text-display-bold'}`}>
        {title}
      </TitleComp>
    </Shimmer>
  );
};

const PriceLabel = ({ price, unit, loading, description, size }) => {
  const TitleComp = size === 'sm' ? Title : Title1;

  return (
    <Shimmer active={loading} className='w-1/2'>
      <View className='flex-row flex-wrap'>
        {size === 'sm' ? null : (
          <View className='flex-1 flex-row py-1'>
            {description.map((detail, index) => (
              <Text className='text-gray-600 px-1' key={index.toString()}>
                {detail}
              </Text>
            ))}
          </View>
        )}
        <View>
          <TitleComp primary className={`${size === 'sm' ? '' : 'mx-2'} font-display`}>
            {unit}
            {price}
          </TitleComp>
        </View>
      </View>
    </Shimmer>
  );
};

const BuyNowAction = ({ productId }) => (
  <Touchable className='justify-center mx-2'>
    <Headline className='text-gray-600'>
      Buy Now
    </Headline>
  </Touchable>
);

const AddToCartAction = ({ title,image,productId, price }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload:{
        price,
        title,
        image,
        productId,
      }
    })
  };

  return (
    <Touchable className='bg-primary justify-center p-2 rounded mx-2' onPress={addToCart}>
      <Headline className='text-white'>
        Add to cart
      </Headline>
    </Touchable>
  );
};

const Actions = ({ title,image,productId, loading,price }) => (
  <Shimmer active={loading} className='h-8'>
    <View className='flex-row flex-wrap'>
      <View className='flex-1' />
      <BuyNowAction productId={productId} />
      <AddToCartAction {...{ title,image,productId,price }} />
    </View>
  </Shimmer>
);

const ProductImage = ({ image, loading, size }) => {
  let heightWidth = '';
  if (size === 'lg') heightWidth = 'h-24 w-24';
  if (size === 'md') heightWidth = 'h-20 w-20';
  if (size === 'sm') heightWidth = 'h-16 w-16';

  return (
    <Shimmer active={loading} className={`${heightWidth} rounded-lg m-0`}>
      <View className={`${heightWidth} bg-gray-400 rounded-lg`} />
    </Shimmer>
  );
};

export const ProductCard = (props) => {
  const {
    productId, title, price, unit = '₹',
    shortDetails, image, size = 'md', navigation,
  } = props;
  const loading = !productId;
  const navigate = () => {
    if (!loading) {
      navigation.navigate(
        'ProductDetail',
        { productId, title, price, unit, shortDetails, image },
      );
    }
  };

  return (
    <View className={`p-2 bg-white rounded-lg ${size === 'lg' ? 'shadow-lg my-4' : ''} ${size === 'md' ? 'my-1' : ''}`}>
      <Touchable feedback={false} onPress={navigate}>
        <View className='flex-row'>
          <ProductImage {...{ image, loading, size }} />
          <View className='flex-1 px-2'>
            <CardHeader {...{ title, loading, size, productId }} />
            <PriceLabel {...{ description: shortDetails, price, unit, loading, size }} />
          </View>
        </View>
      </Touchable>
      {size === 'lg' ? <Actions {...{ title,image,productId, loading,price }} /> : null}
    </View>
  );
};
