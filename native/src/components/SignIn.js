import React from 'react';


import { View,Touchable } from 'framework/surface';
import { Text, Title1, LargeTitle } from 'framework/text';
import { Shimmer } from 'framework/utils';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { min } from "lodash-es";
import { Dimensions } from "react-native";
import { SignInImage } from "./svg/SignInImage";


export const SignIn = ()  => {
  return (
    <View className='flex flex-warp justify-end '>
      <View className='bg-white'>
        <View style={{ height: getStatusBarHeight() }} />
        <View className='px-4'>
          <Title1 animation='fadeInLeft' className='bg-primary'>
            SIGN IN.
          </Title1>
          <View className='py-4'>
            <SignInImage
              className='self-center'
              height={min([250, Dimensions.get('window').height / 2])}
            />
          </View>
        </View>
      </View>
      <View className='flex-row flex-wrap justify-center m-2 mb-10 p-3'>
        <Shimmer className='h-10 w-10 rounded-lg m-0'>
          <View className='h-10 w-10 rounded-lg m-0 bg-red-100' />
        </Shimmer>
        <Title1 className='text-center font-mono font-bold '>Dukan Ka Naam </Title1>
      </View>
      <View className='px-2'>
        <Text className='text-center text-md'>Simple & Safe Shoping </Text>
        <Text className='text-xs text-center text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam animi culpa delectus dicta dolorum eos, harum inventore
          labore laborum, libero, molestias nam placeat quaerat reprehenderi
          t voluptatum! Consequuntur cupiditate facere vitae?
        </Text>
      </View>
      <Touchable className='m-5 mt-10'>
        <View className=' flex-row flex-wrap w-45  justify-center bg-primary p-3 rounded-lg '>
          <Icon color='#fff' size={25} name='google' />
          <Text className=' ml-5 text-white font-semibold text-center tracking-tighter '>
            Continue with google
          </Text>
        </View>
      </Touchable>
    </View>
  );
}
