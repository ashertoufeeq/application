import React from 'react';

import { View, Touchable } from 'framework/surface';
import { Text, Title, Headline, Title1 } from 'framework/text';

const CardHeader = ({ title, placeholder }) => placeholder? (
  <View className='h-6 bg-gray-200 rounded-lg' />
) : (
  <Title>
    {title}
  </Title>
);

const ProductShortDescription = ({ description = [], placeholder }) => placeholder ? (
  <View className='h-6 w-1/2 bg-gray-200 my-1 rounded-lg' />
) : (
  <View className='flex-row py-1'>
    {description.map((detail, index) => (
      <Text className='text-gray-600 px-1' key={index.toString()}>
        {detail}
      </Text>
    ))}
  </View>
);

const PriceLabel = ({ price, unit, placeholder }) => placeholder? null : (
  <View className='mx-2'>
    <Title1 primary className='text-right'>
      {unit}
      {price}
    </Title1>
  </View>
);

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

const Actions = ({ productId, placeholder }) => placeholder? null : (
  <View className='flex-row'>
    <View className='flex-1' />
    <BuyNowAction productId={productId} />
    <AddToCartAction productId={productId} />
  </View>
);

const ProductImage = ({ image, loading }) => (
  <View className='h-32 w-32 bg-gray-200 rounded-lg' />
);

export const ProductCard = ({ productId, title, price, unit='₹', shortDetails, image, placeholder=false }) => (
  <View className='p-2 border-gray-100 rounded-lg bg-white shadow-md flex-row'>
    <ProductImage placeholder={placeholder} />
    <View className='flex-1 px-2'>
      <CardHeader title={title} placeholder={placeholder} />
      <ProductShortDescription description={shortDetails} placeholder={placeholder} />
      <PriceLabel price={price} unit={unit} placeholder={placeholder} />
      <Actions productId={productId} placeholder={placeholder} />
    </View>
  </View>
);

// export const ProductCard = ({ productId, title, price, unit }) => (
//   <View className='p-2 border-gray-100 rounded-lg bg-white shadow-md flex-row'>
//     <ProductImage />
//     <View className='flex-1 px-2'>
//       <CardHeader title='Mr White Detergent powder' />
//       <ProductShortDescription description={['🇮🇳', '3kg']} />
//       <PriceLabel price={195} unit='₹' />
//       <Actions />
//     </View>
//   </View>
// );
