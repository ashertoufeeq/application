import React from 'react';
import { View, Touchable } from 'framework/surface';
import { Headline, Text } from '../../framework/text';
import { ScreenWrapper } from '../../components/ScreenWrapper.native';
import { ScrollView } from '../../framework/surface';
import { AddressCard } from '../../components/AddressCard';

export const AddressesScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView scroll className='flex-1'>
        <Touchable className='m-4 flex-row w-100 bg-primary p-2 rounded justify-center'>
          <Headline className='text-white'>
            Add Address
          </Headline>
        </Touchable>
        <View className='px-4'>
          <AddressCard />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

