import React,{ useState } from 'react';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Shimmer } from 'framework/utils';
import { Touchable, View, TextInput } from '../framework/surface';
import { Footnote, Headline, Text, Title } from '../framework/text';

export const AddressCard = ({ address }) => {
  const [editable,setEditable ] = useState(false);

  const [newAddress,setNewAddress ] = useState(address||{
    street:'',
    city:'',
    state:'',
    pin:'',
  });
  if(editable)
    return(
      <View className='p-4 bg-white rounded-lg shadow-lg my-4'>
        <View className='mb-4 flex-row justify-between'>
          <Title>
            Active
          </Title>
          <Touchable onPress={()=>{setEditable(false)}} feedback={false}>
            <Icon size={30} color='#000' name='close-circle-outline' />
          </Touchable>
        </View>
        <View className='w-full'>
          <TextInput
            value={newAddress.street}
            onChange={(e)=>{console.log(e);setNewAddress({ ...newAddress,street:e.target.value })}}
            placeholderTextColor='gray-500'
            placeholder='Hi Faisal, Please enter your street'
            className='flex-1 text-gray-900 text-lg self-center w-full'
        />
        </View>
        <View className='flex-row'>
          <View className='flex-1'>
            <TextInput
              value={newAddress.city}
              onChange={(e)=>{console.log(e);setNewAddress({ ...newAddress,city:e.target.value })}}
              placeholder='City'
              className='flex-1 text-gray-900 text-lg self-center w-full'
            />
          </View>
          <View className='flex-row items-end'>
            <Text>
              {', '}
            </Text>
          </View>
          <View className='flex-1'>
            <TextInput
              value={newAddress.state}
              onChange={(e)=>{console.log(e);setNewAddress({ ...newAddress,state:e.target.value })}}
              placeholder='State'
              className='flex-1 text-gray-900 text-lg self-center w-full'
            />
          </View>
        </View>
        <View className='flex-row'>
          <View className='flex-1'>
            <TextInput
              value={newAddress.pin}
              onChange={(e)=>{console.log(e);setNewAddress({ ...newAddress,pin:e.target.value })}}
              placeholderTextColor='gray-500'
              placeholder='Pin'
              className='flex-1 text-gray-900 text-lg self-center w-full'
            />
          </View>
        </View>
      </View>
    )

  return address?(
    <View className='p-4 bg-white rounded-lg shadow-lg my-4'>
      <View className='mb-4 flex-row justify-between'>
        <Title>
          Active
        </Title>
        <Touchable onPress={()=>{setEditable(true)}} feedback={false}>
          <Icon size={30} color='#000' name='square-edit-outline' />
        </Touchable>
      </View>
      <Headline>
        <Shimmer active={!address.street}>
          {address.street || 'street'}
        </Shimmer>
      </Headline>
      <View className='flex-row'>
        <Footnote>
          <Shimmer active={!address.street}>
            {address.city || 'city'}
          </Shimmer>
        </Footnote>
        <Text>
          {', '}
        </Text>
        <Footnote>
          <Shimmer active={!address.street}>
            {address.state || 'state'}
          </Shimmer>
        </Footnote>
      </View>
      <View className='flex-row'>
        <Footnote>
          <Shimmer active={!address.street}>
            {address.pin || 'pin'}
          </Shimmer>
        </Footnote>
      </View>
    </View>
  ):(
    <View className='p-4 bg-white rounded-lg shadow-lg my-4'>
      <Shimmer active className='h-4 w-full' />
      <Shimmer active className='h-4 w-full' />
      <Shimmer active className='h-4 w-full' />
      <Shimmer active className='h-4 w-full' />
    </View>
  );
};
