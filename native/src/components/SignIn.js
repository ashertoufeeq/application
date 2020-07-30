import React, { useEffect } from 'react';


import { View,Touchable } from 'framework/surface';
import { Text, Title1, LargeTitle , Headline } from 'framework/text';
import { Shimmer } from 'framework/utils';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { min } from "lodash-es";
import { ActivityIndicator, Dimensions } from "react-native";
import { useGoogleAuthentication } from 'hooks/auth';
import { useUser } from 'common/hooks/auth';
import { SignInImage } from "./svg/SignInImage";




export const SignInScreen = ({ navigation })  => {
  const { signIn, inProgress } = useGoogleAuthentication();
  const { isAuthenticated } = useUser();

  useEffect(()=>{
    if(isAuthenticated){
      navigation.navigate('Store')
    }
  },[isAuthenticated])
  return (
    <View className='flex flex-warp justify-between bg-white h-full'>
      <View className='bg-white'>
        <View style={{ height: getStatusBarHeight() }} />
        <View className='px-4'>
          <LargeTitle animation='fadeInLeft' className='text-primary'>
            SIGN IN.
          </LargeTitle>
          <View className='py-4'>
            <SignInImage
              className='self-center'
              height={min([250, Dimensions.get('window').height / 3])}
            />
          </View>
        </View>
      </View>
      <View>
        <View className='px-2'>
          <Text className='text-center text-md'>Simple & Safe Shoping </Text>
          <Text className='text-xs text-center text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam animi culpa delectus dicta dolorum eos, harum inventore
            labore laborum, libero, molestias nam placeat quaerat reprehenderi
            t voluptatum! Consequuntur cupiditate facere vitae?
          </Text>
        </View>
        <Touchable className='m-5 mt-10' onPress={()=>{signIn()}}>
          <View
            className='flex-row flex-wrap w-45 justify-center items-center bg-primary p-3 rounded-lg'>
            {inProgress?<ActivityIndicator loading={inProgress} size={25} color='#fff' />
              :<Icon color='#fff' size={25} name='google' />}
            <Headline className=' ml-5 text-white font-semibold text-center tracking-tighter '>
              Sign In with Google
            </Headline>
          </View>
        </Touchable>
      </View>
    </View>
  );
}
