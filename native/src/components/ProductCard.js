import React from 'react';

import { View, Touchable } from 'framework/surface';
import { Text, Title, Headline, Title1 } from 'framework/text';
import { Shimmer } from 'framework/utils';

const CardHeader = ({ title, loading, size }) => {
  const TitleComp = size === 'sm' ? Headline : Title;

  return (
    <Shimmer active={loading} className={`${size === 'sm' ? 'h-6' : 'h-12'}`}>
      <TitleComp>
        {title}
      </TitleComp>
    </Shimmer>
  );
};

const PriceLabel = ({ price, unit, loading, description, size }) => {
  const TitleComp = size === 'sm'? Title : Title1;

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
          <TitleComp primary className={`${size === 'sm'? '' : 'mx-2'}`}>
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

const AddToCartAction = ({ productId }) => (
  <Touchable className='bg-primary justify-center p-2 rounded mx-2'>
    <Headline className='text-white'>
      Add to cart
    </Headline>
  </Touchable>
);

const Actions = ({ productId, loading }) => (
  <Shimmer active={loading} className='h-8'>
    <View className='flex-row'>
      <View className='flex-1' />
      <BuyNowAction productId={productId} />
      <AddToCartAction productId={productId} />
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

export const ProductCard = ({ productId, title, price, unit = '₹', shortDetails, image, size = 'md' }) => {
  const loading = !productId;
  return (
    <View className={`p-2 ${size === 'lg' ? 'rounded-lg bg-white shadow-lg my-4' : ''} ${size === 'md'? 'my-1' : ''}`}>
      <View className='flex-row'>
        <ProductImage image={image} loading={loading} size={size} />
        <View className='flex-1 px-2'>
          <CardHeader title={title} loading={loading} size={size} />
          <PriceLabel description={shortDetails} price={price} unit={unit} loading={loading} size={size} />
        </View>
      </View>
      {size === 'lg' ? <Actions productId={productId} loading={loading} /> : null}
    </View>
  );
};
