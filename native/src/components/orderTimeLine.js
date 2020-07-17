import React from 'react';
import { Headline } from 'framework/text';
import { View, Touchable } from 'framework/surface';
import { Shimmer } from 'framework/utils';

export const OrderTimeLine = ({ loading,status }) => {
  const activeColor = 'bg-green-500';
  const inActiveColor = 'bg-red-600'
  const inActiveCircle = 'border-red-600 border'

  return (
    <Shimmer className='h-64' active={false}>
      <View className='flex-row items-center h-64'>
        <View
          className='flex-column w-2 items-center'>
          <View className='flex-row justify-start items-center'>
            <View className='h-4 w-4 rounded-full bg-green-500' />
          </View>
          <View
            className={`w-1 bg-black m-0 ${status.processing?activeColor:inActiveColor}`}
            style={{ height:'25%' }} />
          <View className='flex-row justify-start items-center'>
            <View
              className={`h-4 w-4 rounded-full ${status.processing?activeColor:inActiveCircle}`} />
          </View>
          <View
            className={`w-1 bg-black m-0 ${status.dispatch?activeColor:inActiveColor}`}
            style={{ height:'25%' }} />
          <View className='flex-row justify-start items-center'>
            <View
              className={`h-4 w-4 rounded-full ${status.dispatch?activeColor:inActiveCircle}`} />
          </View>
          <View
            className={`w-1 bg-black m-0 ${status.delivered?activeColor:inActiveColor}`}
            style={{ height:'25%' }} />
          <View className='flex-row justify-start items-center'>
            <View
              className={`h-4 w-4 rounded-full ${status.delivered?activeColor:inActiveCircle}`} />
          </View>
        </View>
        <View
          className='flex-column mx-2'>
          <Headline>Ordered</Headline>
          <View className='w-1  m-0' style={{ height:'22%' }} />
          <Headline>Processing</Headline>
          <View className='w-1  m-0' style={{ height:'23%' }} />
          <Headline>Dispatch</Headline>
          <View className='w-1  m-0' style={{ height:'22%' }} />
          <Headline>Delivered</Headline>
        </View>
      </View>
    </Shimmer>
  );
};

