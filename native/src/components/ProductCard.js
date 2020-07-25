import React, { useEffect, useState } from 'react';
import { Text, Title1, Headline, Title } from 'framework/text';
import { Shimmer } from 'framework/utils';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from 'shared/actions';
import { View, Touchable } from 'framework/surface';
import { Dropdown, DropDownItem } from 'components/dropdown/dropdown';

import { useHttpGet } from 'common/hooks/http';
import { Image } from '../framework/surface';

const CardHeader = ({ title, loading, size, productId }) => {
  return (
    <Shimmer active={loading} className={`${size === 'sm' ? 'h-6' : 'h-12'}`}>
      <Headline>
        {title}
      </Headline>
    </Shimmer>
  );
};
const VarientsDropDown = ({ results, variant,setVariant, count }) => {
  console.log(count,'count')
  if (count > 1)
    return (
      <View>
        <Dropdown selectedValue={results[variant].name}>
          {results.map((result, index) => (
            <DropDownItem
              onChange={(e) => {
                setVariant(index);
              }}
              value={result.name}
              key={result.name}
              label={result.name}
            />

          ))}
        </Dropdown>
      </View>
    );
  return <View />;
};

const PriceLabel = ({
  shortDetails, unit, loading,
  size, results, variant, setVariant, count, navigate,
}) => {
  const TitleComp = size === 'sm' ? Title : Title1;
  return (
    <Shimmer active={loading} className='w-1/2'>
      <View className='flex-row flex-wrap justify-between'>
        {size === 'sm' ?
          <VarientsDropDown {...{ results, variant, setVariant, count }} />
          : (
            <Touchable
              feedback={false}
              onPress={() => {
                navigate();
              }}>
              <View className='flex-1 flex-row py-1'>
                {shortDetails.map((detail, index) => (
                  <Text className='text-gray-600 px-1' key={index.toString()}>
                    {detail}
                  </Text>
                ))}
              </View>
            </Touchable>
          )}
        <Touchable
          feedback={false}
          onPress={() => {
            navigate();
          }}>
          <View>
            <TitleComp primary className={`${size === 'sm' ? '' : 'mx-2'} font-display`}>
              {unit}
              {results[variant].price}
            </TitleComp>
          </View>
        </Touchable>
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

const AddToCartAction = ({ title, image, productId, price }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        price,
        title,
        image,
        productId,
      },
    });
  };

  return (
    <Touchable className='bg-primary justify-center p-2 rounded mx-2' onPress={addToCart}>
      <Headline className='text-white'>
        Add to cart
      </Headline>
    </Touchable>
  );
};

const Actions = ({ productId, loading, onAddCart,count,
  variant,
  setVariant,
  results }) => (
    <Shimmer active={loading} className='h-8'>
      <View className='flex-row flex-wrap z-30'>
        <VarientsDropDown {...{ variant, setVariant,
          results,count }} />
        <View className='flex-1' />
        <BuyNowAction productId={productId} />
        <AddToCartAction onAddCart={onAddCart} {...variant} />
      </View>
    </Shimmer>
)



const ProductImage = ({ image, loading, size }) => {
  let heightWidth = '';
  if (size === 'lg') heightWidth = 'h-24 w-24';
  if (size === 'md') heightWidth = 'h-20 w-20';
  if (size === 'sm') heightWidth = 'h-16 w-16';

  return (
    <Shimmer active={loading} className={`${heightWidth} rounded-lg m-0`}>
      <Image className={`${heightWidth} bg-gray-400 rounded-lg`} />
    </Shimmer>
  );
};

export const ProductCard = ({ id ,navigation,size='sm' }) => {
  const productId=id;
  const { data, loading: productLoading } = useHttpGet(`/shop/products/${productId}/`,
    { secure: false, cache: 1000 * 60 * 60 * 5 });
  const { data: variants, loading: variantsLoading } =
    useHttpGet(`/shop/products/${productId}/variants/`,
      { secure: false, cache: 1000 * 60 * 60 * 5 });
  const { brand, name: productName } = data || {};
  const { name: brandName = '' } = brand || {};
  const title = `${brandName} ${productName}`;
  const { results }=variants!==undefined?variants : { results:{} };
  const { count }=variants!==undefined?variants:{ count:1 };
  const unit='₹';
  const loading = productLoading || variantsLoading;
  const [variant,setVariant] = useState(0);




  const navigate = () => {
    if (!loading) {
      navigation.push(
        'variants',
        { results,variant,unit,count,title },
      );
    }
  };
  return (
    <View className={`p-2 bg-white rounded-lg ${size === 'lg' ? 'shadow-lg my-4' : ''}
  ${size === 'md' ? 'my-1' : ''}`}>
      <View className='flex-row '>
        <Touchable
          feedback={false}
          onPress={() => {
            navigate();
          }}>
          <ProductImage {...{ loading, size }} />
        </Touchable>
        <View className='flex-1 px-2 '>
          <Touchable
            feedback={false}
            onPress={() => {
              navigate();
            }}>
            <CardHeader {...{ title, loading, size, productId }} />
          </Touchable>
          {!variantsLoading ? (
            <PriceLabel {...{
              shortDetails: results[0].detail,
              price: results[0].price,
              unit, loading, size, variant, setVariant, count, navigate, results,
            }} />
          ) : null}
        </View>
      </View>
      {size === 'lg' ? (
        <Actions {...{ productId, loading, variant, setVariant,results,count }} />
      ) : null}
    </View>
  );
};
