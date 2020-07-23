import React from 'react';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { Title ,Text } from 'framework/text';
import { View ,Touchable } from 'framework/surface';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSelector } from 'react-redux';
import { CartCard } from 'components/CartCard';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
<<<<<<< HEAD
import  { WebView } from "react-native-webview";

const Payment = () =>{
  console.log("inside payment kgikhihi");
  return(
    <View className='w-screen h-screen'>
      <WebView
        source={{ uri: 'https://reactnative.dev/docs/environment-setup' }}
        onError={syntheticEvent => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
    />
    </View>

  );
}

=======
import { useUser } from 'common/hooks/auth';
>>>>>>> fa5deb8eda513602503f822fc766b12a1eff2497

const placeOrder = ( navigation,cart,user,isAuthenticated ) =>{
  if(isAuthenticated){
    console.log('Placed order')
  }
  else{
    navigation.push('SignIn',{ cart, user });
  }
}

const CalculateTotal = ({ navigation,user,isAuthenticated }) =>{
  const { cart } = useSelector(state => state.product);
  let total=0;
  Object.keys(cart).forEach((key,index) => {
    total+=cart[key].price*cart[key].unit;
  });
  const handlePayment = () => {
    return(
      <Payment />
    );
  }
  return (
    <View className=' mt-auto flex-row flex-wrap justify-between bg-gray-200 rounded  p-3 '>
      <Text className='font-bold text-xl  pt-2'>
        {' $ '}
        {' '}
        {total}
      </Text>
<<<<<<< HEAD
      <Touchable className='' onPress={handlePayment}>
=======
      <Touchable
        className=''
        feedback={false}
        onPress={()=>{placeOrder(navigation,cart,user,isAuthenticated)}}>
>>>>>>> fa5deb8eda513602503f822fc766b12a1eff2497
        <Text className='bg-primary font-sans text-xl p-2 rounded text-white'> PLACE ORDER </Text>
      </Touchable>
    </View>
  );
}

const PriceDetails = () => {
  const { cart } = useSelector(state => state.product);
  const keys = Object.keys(cart);
  let total=0;
  Object.keys(cart).forEach((key,index) => {
    total+=cart[key].price*cart[key].unit;
  });
  return (
    <View className='w-auto'>
      {keys.map((key, index) =>(
        <View className='flex-row flex-wrap justify-between p-2 bg-gray-100' key={index.toString()}>
          <Text>
            {cart[key].name}
          </Text>
          <View className='flex-row flex-wrap justify-between'>
            <Text>
              {' '}
              {cart[key].unit}
              {'     '}
            </Text>
            <Text>{cart[key].price*cart[key].unit}</Text>
          </View>
        </View>
      ))}
      <View className='w-auto h-1 bg-gray-700 my-2' />
      <View className='flex-row flex-wrap justify-between'>
        <Text className='font-sans font-bold tracking-widest'>TOTAL</Text>
        <Text>
          {total}
        </Text>
      </View>
    </View>
  )
}



const Cart = ({ navigation }) => {
  const { cart } = useSelector(state => state.product);
  const keys = Object.keys(cart);

  return (
    <View className='h-12 w-auto mb-1 '>
      {keys.map((key, index) =>(
        <CartCard
          key={index.toString()}
          productId={key}
          title={cart[key].name}
          price={cart[key].price}
          unit={cart[key].unit}
          image={cart[key].img}
          navigation={navigation}
            />
      ))}
      <PriceDetails className='border' />
    </View>
  );
};


export const CartScreen = ({ navigation }) => {
  const { user, isAuthenticated } = useUser();

  return (
    <ScreenWrapper title='Cart Screen'>
      <View style={{ height: getStatusBarHeight() }} />
      <View className='p-4 '>
        <Title>
          Cart
          {' '}
          {' '}
          <Icon color='#000' size={25} name='cart' />
        </Title>
        <Cart {...{ navigation }} />
      </View>
<<<<<<< HEAD
      <CalculateTotal />

=======
      <CalculateTotal {...{ navigation,user,isAuthenticated }} />
>>>>>>> fa5deb8eda513602503f822fc766b12a1eff2497
    </ScreenWrapper>
  );
};
