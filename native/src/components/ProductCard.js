import React, { useEffect, useState } from 'react';
import { Text, Title1, Headline, Title } from 'framework/text';
import { Shimmer } from 'framework/utils';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART, DECREMENT_CART } from 'shared/actions';
import { View, Touchable } from 'framework/surface';
import { Dropdown, DropDownItem } from 'components/dropdown/dropdown';
import { postProductOnCart } from "shared/hooks/postCart";
import { useHttpGet } from 'common/hooks/http';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from '../framework/surface';

const CardHeader = ({ title, loading, size, productId }) => {
  const TitleComp = size === 'sm' ? Headline : Title1;

  return (
    <Shimmer active={loading} className={`${size === 'sm' ? 'h-6' : 'h-12'}`}>
      <TitleComp>
        {title}
      </TitleComp>
    </Shimmer>
  );
};


const ButtonIncDec =( { variant,results,productId,unit }) => {
  const { price,name:title,image } = results[variant];
  const dispatch = useDispatch();
  return (
    <View className='bg-primary w-24 rounded flex-row m-t-2 items-center p-2 justify-between'>
      <Touchable onPress={()=>{
        dispatch({
          type:DECREMENT_CART,
          productId
        })}}>
        <Icon color='#fff' size={25} name='minus' />
      </Touchable>
      <View>
        <Text className='text-white'>{unit}</Text>
      </View>
      <Touchable onPress={()=>{
        dispatch({
          type: ADD_TO_CART,
          payload: {
            price,
            title,
            productId,
            image : '',
          },
        });
      }}>
        <Icon color='#fff' size={25} name='plus' />
      </Touchable>
      {/* <DecrementButton productId={productId} /> */}
      {/* <View className='border-2 border-gray-300 '> */}
      {/*  <Text className='mt-auto mb-auto'> */}
      {/*    {'   '} */}
      {/*    {unit} */}
      {/*    {'   '} */}
      {/*  </Text> */}
      {/* </View> */}
      {/* <AddToCartButton {...{ title,image,productId ,price }} /> */}
    </View>
  )
}


const VarientsDropDown = ({ results, variant,setVariant, count,size }) => {
  if (count > 1 && size !== 'md')
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
  return(
    <View
      className='flex-nowrap m-2 px-2 py-1 rounded bg-gray-100
       flex-row justify-between items-center'>
      <Text ellipsizeMode='tail' numberOfLines={1}>{results[variant].name}</Text>
    </View>
  );
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
          <VarientsDropDown {...{ results, variant, setVariant, count,size }} />
          : (<View />
        // <Touchable
        //   feedback={false}
        //   onPress={() => {
        //     navigate();
        //   }}>
        //   <View className='flex-1 flex-wrap flex-row py-1'>
        //     {Object.keys(shortDetails).map((key, index) => (
        //       <Text className='text-gray-600 px-1' key={index.toString()}>
        //         {shortDetails[key]}
        //       </Text>
        //     ))}
        //   </View>
        // </Touchable>
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


// const BuyNowAction = ({ productId }) => (
//   <Touchable className='justify-center mx-2'>
//     <Headline className='text-gray-600'>
//       Buy Now
//     </Headline>
//   </Touchable>
// );
//
// const AddToCartAction = ({ variant,results }) => {
//   const dispatch=useDispatch();
//   const addToCart = () => {
//     console.log("inside add cart");
//     dispatch(()=>postProductOnCart(results[variant].id));


const AddToCartAction = ( { variant,results,productId }) => {
  const dispatch = useDispatch();
  const { id,name:title, } = results[variant];
  const addToCart = () => {
    dispatch(postProductOnCart(id));
  };

  return (
    <Touchable className='bg-primary justify-center p-2 rounded mx-2' onPress={addToCart}>
      <Headline className='text-white'>
        Add to cart
      </Headline>
    </Touchable>
  );
};

const Actions = ({ productId, loading,count,
  variant,
  setVariant,quantity,
  results,size }) => (
    <Shimmer active={loading} className='h-8'>
      <View className='flex-row flex-wrap justify-between'>
        <VarientsDropDown {...{ variant, setVariant,
          size,
          results,count }} />
        {size==='md'?(
          <ButtonIncDec
            results={results}
            variant={variant}
            productId={productId}
            unit={quantity} />
        ):
          <AddToCartAction {...{ variant,results,productId }} />}
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

export const ProductCard = ({ id ,navigation,size='sm',quantity }) => {
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

  return loading? (
    <View className={`p-2 bg-white rounded-lg ${size === 'lg' ? 'shadow-lg my-4' : ''}
  ${size === 'md' ? 'my-1' : ''}`}>
      <Shimmer className='h-24 w-full' active={loading} />
    </View>
  ):
    (
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
          <View className='flex-1 px-2 justify-between'>
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
        {size ==='lg' || size ==='md' ? (
          <Actions {...{ productId, loading, variant, setVariant,results,count,size,quantity }} />
        ) : null}
      </View>
    );
};
