import React from 'react';
import {  Headline,Footnote ,Title } from 'framework/text';
import { View, Touchable } from 'framework/surface';


export const LiveOrderCard = ({ navigation }) =>
{
  return(
    <Touchable feedback={false} onPress={()=>{navigation.navigate('OrderTimeline',)}}>
      <View className='p-2 px-4 bg-white rounded-lg shadow-lg my-4'>
        <Footnote>
          Order Id : 2097978787
        </Footnote>
        <Title>
          Washing Powder, Soya Oil
        </Title>
        <View className='my-2 flex-row justify-start items-center'>
          <View className='h-4 w-4 rounded-full bg-green-500 mr-2' />
          <Headline>Delivered</Headline>
        </View>
      </View>
    </Touchable>
  )
}
