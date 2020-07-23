import React, { useEffect, useState } from 'react';
import { Text, Title1, Headline, Title } from 'framework/text';
import { Shimmer } from 'framework/utils';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from 'shared/actions';
import { View, Touchable } from 'framework/surface';
import { Dropdown, DropDownItem } from 'components/dropdown/dropdown';

import { useHttpGet } from 'common/hooks/http';

const CardHeader = ({ title, loading, size, productId }) => {
  const TitleComp = size === 'sm' ? Title : Title1;
  return (
    <Shimmer active={loading} className={`${size === 'sm' ? 'h-6' : 'h-12'}`}>
      <Text className='text-lg'>
        {title}
      </Text>
    </Shimmer>
  );
};
const VarientsDropDown = ({ results,variant, setVariant, count }) => {
  const keys=Object.keys(results);
  console.log({ results ,keys });
  if (count)
    return (
      <View className='w-32'>
        {/* <Dropdown selectedValue={variant.leaderFeature}> */}
        {/*  <View className='rounded m-2 bg-white p-2'> */}
        {/*    {options.map((Item) => ( */}
        {/*      <DropDownItem */}
        {/*        onChange={(e)=>{setVariant(e)}} */}
        {/*        value={Item} */}
        {/*        key={Item.leaderFeature} */}
        {/*        label={Item.leaderFeature} */}
        {/*      /> */}
        {/*    ))} */}
        {/*  </View> */}
        {/* </Dropdown> */}
        <View className='border-solid w-32 border-gray-400 mt-1 border rounded'>
          {keys.forEach((key,index)=>(
            <Text>
              {results[key].name}
            </Text>
          ))}
        </View>
      </View>
    );
  return null;
};

const PriceLabel = ({ shortDetails,price, unit, loading,
  size, results,variant,setVariant,count,navigate }) => {
  const TitleComp = size === 'sm' ? Title : Title1;
  console.log("inside price label");
  const keys=Object.keys(shortDetails);
  console.log(keys,shortDetails);
  return (
    <Shimmer active={loading} className='w-1/2'>
      <View className='flex-row flex-wrap justify-between'>
        {size === 'sm' ?
          <VarientsDropDown {...{ results,variant, setVariant, count }} />
          : (
            <Touchable
              feedback={false}
              onPress={() => {
                navigate();
              }}>
              <View className='flex-1 flex-row py-1'>
                {Object.keys(shortDetails).forEach((key, index) => (
                  <Text className='text-gray-600 px-1' key={index.toString()}>
                    {shortDetails[key]}
                    {' '}
                    textt
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

const Actions = ({ productId, loading, onAddCart,
  variant,
  setVariant,
  multiVariants,
  options }) => (
    <Shimmer active={loading} className='h-8'>
      <View className='flex-row flex-wrap z-30'>
        <VarientsDropDown {...{ variant, setVariant,
          options,
          multiVariants }} />
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
      <View className={`${heightWidth} bg-gray-400 rounded-lg`} />
    </Shimmer>
  );
};

export const ProductCard = ({ id ,navigation,size='sm' }) => {
  console.log("in Product Carddd");
  const { data,loading:productLoading,error }=useHttpGet(`/shop/products/${id}/`,{ secure:false });
  console.log({ data,productLoading,error, });
  const { data:variants,loading:variantsLoading,error:variantsError }=useHttpGet(`/shop/products/${id}/variants/`,{ secure:false });
  console.log({ variants,variantsLoading,variantsError });
  const { brand,name:productName }=data||"null";
  const { name:shopName }=brand||"null";
  const title=`${shopName}  ${productName}`;
  const { results }=variants!==undefined?variants : { results:{} };
  const { count }=variants!==undefined?variants:{ count:1 };
  console.log({ results,count });
  const productId=id;
  const unit='₹';
  console.log("sdfghjklwertyuioxcvbn");
  console.log({ title,unit,productId });
  const loading = productLoading || variantsLoading;
  const [variant,setVariant] = useState(0);
  console.log({ variant });

  if(results!==undefined)
    console.log(results['0']);

  const image="";
  const navigate = () => {
    if (!loading) {
      navigation.navigate(
        'variantsM',
        { productId, title, price:results["0"].detail, unit, shortDetails:results["0"].detail, image },
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
          <ProductImage {...{ image, loading, size }} />
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
              shortDetails:results["0"].detail, price:results["0"].price, unit, loading, size,variant, setVariant,count,navigate,results
            }} />
          ):null}

        </View>
      </View>
      {/* {size === 'lg' ? ( */}
      {/*  <Actions {...{ productId, loading, onAddCart, variant, setVariant, */}
      {/*    options: props.variants, multiVariants: props.multiVariants, }} /> */}
      {/* ) : null} */}
    </View>
  );
};
