import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { getStatusBarHeight } from 'react-native-status-bar-height';

import { View } from 'framework/surface';
import {ScrollView} from 'react-native';

export const ScreenWrapper = (props) =>{
  if(props.scroll){
    return (
      <ScrollView contentInsetAdjustmentBehavior='automatic' style={{minHeight:'100%'}} {...props.scrollProps}>
          <View className='h-full' {...props} />
      </ScrollView>
      )
  }
    return <View className='h-full' {...props} />
};
