import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Touchable } from 'framework/surface';
import { Text, Title, Headline } from 'framework/text';
import { Shimmer } from 'framework/utils';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART ,DECREMENT_CART } from 'shared/actions';

const CardHeader = ({ title, loading }) => {
  return (
    <Shimmer active={loading} className='h-12'>
      <Headline className='font-sans text-lg text-gray-800 m-2 mt-0 ml-0'>
        {title}
      </Headline>
    </Shimmer>
  );
};


const DecrementAction = ({ productId }) => {
  const dispatch = useDispatch();
  const decrement = () =>{
    dispatch({
      type:DECREMENT_CART,
      productId
    })
  };
  return(
    <Touchable className='bg-primary justify-center  px-2 rounded ' onPress={decrement}>
      <Headline className='text-white'>
        <Icon color='#fff' size={20} name='minus' />
      </Headline>
    </Touchable>
  );
}

const ButtonIncDec =({ title,image,productId ,price,unit }) => {
  return (
    <View className='flex-row flex-wrap  '>
      <DecrementAction productId={productId} />
      <View className='border-2 border-gray-300 '>
        <Text className='mt-auto mb-auto'>
          {'   '}
          {unit}
          {'   '}
        </Text>
      </View>
      <AddToCartAction {...{ title,image,productId ,price }} />
    </View>
  )
}

const AddToCartAction = ({ title,image,productId ,price }) => {
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
    <Touchable className='bg-primary justify-center  px-2 rounded' onPress={addToCart}>
      <Headline className='text-white'>
        <Icon color='#fff' size={20} name='plus' />
      </Headline>
    </Touchable>
  );
};

const ProductImage = ({ image, loading }) => {
  return (
    <Shimmer active={loading} className='h-20 w-20 rounded-lg m-0'>
      <View className='h-20 w-20 rounded-lg m-0 bg-red-100' />
    </Shimmer>
  );
};

export const CartCard = (props) => {
  const {
    key,productId, title,price,unit, image
  } = props;
  const loading = !productId;

  return (
    <View className='flex-row p-2 bg-gray-200 rounded-lg m-2 mx-1'>
      <View className='flex-1 px-2'>
        <CardHeader {...{ title, loading, productId }} />
        <View className='flex-row flex-wrap justify-between '>
          <Text className=' bg-gray-100 text-center rounded-sm px-2 '>
            <Icon color='#000' size={25} name='cash' />
            {'  '}
            {' '}
            {price}
          </Text>
          <ButtonIncDec className='' {...{ title,image,productId,price,unit }} />
        </View>
      </View>
      <ProductImage {...{ image, loading }} />
    </View>
  );
};
