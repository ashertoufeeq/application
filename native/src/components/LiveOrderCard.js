import React, { useState } from 'react';
import { Text, Title1, Headline,Footnote ,Callout,Title } from 'framework/text';
import { Shimmer } from 'framework/utils';
import { View, Touchable } from 'framework/surface';

export const LiveOrderCard = () =>
{
  return(
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

      <View className='flex-row items-center h-64 '>
        <View
          className='flex-column  w-2 items-center'>
          <View className='flex-row justify-start items-center'>
            <View className='h-4 w-4 rounded-full bg-green-500' />
          </View>
          <View className='w-1  bg-black m-0 bg-green-500' style={{ height:'25%' }} />
          <View className='flex-row justify-start items-center'>
            <View className='h-4 w-4 rounded-full bg-green-500' />
          </View>
          <View className='w-1 bg-black m-0 bg-green-500' style={{ height:'25%' }} />
          <View className='flex-row justify-start items-center'>
            <View className='h-4 w-4 rounded-full bg-green-500' />
          </View>
          <View className='w-1  bg-black m-0 bg-green-500' style={{ height:'25%' }} />
          <View className='flex-row justify-start items-center'>
            <View className='h-4 w-4 rounded-full bg-green-500' />
          </View>
        </View>
        <View
          className='flex-column   items-center mx-2'>
          <Headline>Delivered</Headline>
          <View className='w-1  m-0' style={{ height:'22%' }} />
          <Headline>Delivered</Headline>
          <View className='w-1  m-0' style={{ height:'23%' }} />
          <Headline>Delivered</Headline>
          <View className='w-1  m-0' style={{ height:'22%' }} />
          <Headline>Delivered</Headline>
        </View>
      </View>
    </View>
  )
}
