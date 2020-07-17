import React from 'react';
import { View, Touchable } from 'framework/surface';
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Title, Footnote, Headline } from '../../framework/text';
import { OrderTimeLine } from '../../components/orderTimeLine';
import { ScreenWrapper } from '../../components/ScreenWrapper.native';
import { ScrollView } from '../../framework/surface';

export const OrderTimelineScreen = () => {
  return (
    <ScreenWrapper>
      <View style={{ height: getStatusBarHeight() }} />
      <ScrollView scroll className='flex-1'>
        <View className='px-4 '>
          <Title>
            Washing Powder, Soya Oil
          </Title>
        </View>
        <View className='px-4 '>
          <Footnote>
            Order Id : 2097978787
          </Footnote>
        </View>
        <View className='p-2 px-4 my-4'>
          <OrderTimeLine
            status={{
              ordered:true,processing:true,
              dispatch:false,
              delivered:false }}  />
        </View>
        <View className='p-2 px-4 my-4'>
          <OrderTimeLine
            status={{
              ordered:true,
              processing:true,
              dispatch:true,
              delivered:false }}  />
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
};

