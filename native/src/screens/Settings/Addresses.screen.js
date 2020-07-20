import React, { useState } from 'react';
import { ScrollView,View, Touchable } from 'framework/surface';
import { Headline } from 'framework/text';
import { ScreenWrapper } from 'components/ScreenWrapper.native';
import { AddressCard } from 'components/AddressCard';
import { useSelector } from 'react-redux';

export const AddressesScreen = () => {
  const { addresses } = useSelector(state => state.product)
  const [addNew,setAddNew] = useState(false)
  return (
    <ScreenWrapper>
      <ScrollView scroll className='flex-1'>
        <Touchable
          className='m-4 flex-row w-100 bg-primary p-2 rounded justify-center'
          onPress={()=>{setAddNew(true)}}>
          <Headline className='text-white'>
            Add Address
          </Headline>
        </Touchable>
        {addNew?(
          <View className='px-4'>
            <AddressCard />
          </View>
        ):null}
        {
          (addresses||[]).map(address=>(
            <View className='px-4' key={address.id.toString()}>
              <AddressCard address={address} />
            </View>
          ))
        }
        {console.log(addresses)}
      </ScrollView>
    </ScreenWrapper>
  );
};

