import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Shimmer} from 'framework/utils';
import {Touchable, View, TextInput} from 'framework/surface';
import {Footnote, Headline, Text, Title} from 'framework/text';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {addAddress, editAddress, removeAddress} from 'common/actions/product';


export const AddressCard = ({address}) => {
  const {addresses} = useSelector(state => state.product);
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(!address);

  const [newAddress, setNewAddress] = useState(address || {
    street: '',
    city: '',
    state: '',
    pin: '',
    id: addresses.length,
  });
  const dispatchChanges = () =>{
    dispatch(address ? editAddress(newAddress) : addAddress(newAddress));
    setEditable(!address);
    if(!address){
      setNewAddress({street: '',
        city: '',
        state: '',
        pin: '',
        id: addresses.length,})
    }
  }
  useEffect(() => {
    return ()=>{console.log('focus out')}
  }, []);
  if (editable)
    return (
      <View className='p-4 bg-white rounded-lg shadow-lg my-4'>
        <View className='mb-4 flex-row justify-between'>
          <Title>
            Active
          </Title>
          <View className={'flex-row items-center justify-between'}>
          <Touchable feedback={false}>
            <Icon size={30} color='#000' name='close-circle-outline'/>
          </Touchable>
          <Touchable onPress={() => {
            dispatch(removeAddress(newAddress));
          }} feedback={false}>
            <Icon size={30} color='#000' name='delete-outline'/>
          </Touchable>
          </View>
        </View>
        <View className='w-full'>
          <TextInput
            onBlur={dispatchChanges}
            value={newAddress.street}
            onChange={(e) => {
              setNewAddress({...newAddress, street: e.nativeEvent.text});
            }}
            placeholderTextColor='gray-500'
            placeholder='Hi Faisal, Please enter your street'
            className='flex-1 text-gray-900 text-lg self-center w-full'
          />
        </View>
        <View className='flex-row'>
          <View className='flex-1'>
            <TextInput
              onBlur={dispatchChanges}
              value={newAddress.city}
              onChange={(e) => {
                setNewAddress({...newAddress, city: e.nativeEvent.text});
              }}
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
              onBlur={dispatchChanges}
              value={newAddress.state}
              onChange={(e) => {
                setNewAddress({...newAddress, state: e.nativeEvent.text});
              }}
              placeholder='State'
              className='flex-1 text-gray-900 text-lg self-center w-full'
            />
          </View>
        </View>
        <View className='flex-row'>
          <View className='flex-1'>
            <TextInput
              onBlur={dispatchChanges}
              value={newAddress.pin}
              onChange={(e) => {
                setNewAddress({...newAddress, pin: e.nativeEvent.text});
              }}
              placeholderTextColor='gray-500'
              placeholder='Pin'
              className='flex-1 text-gray-900 text-lg self-center w-full'
            />
          </View>
        </View>
      </View>
    );

  return address ? (
    <View className='p-4 bg-white rounded-lg shadow-lg my-4'>
      <View className='mb-4 flex-row justify-between'>
        <Title>
          Active
        </Title>
        <View className={'flex-row items-center justify-between'}>
          <Touchable onPress={() => {
            setEditable(true);
          }} feedback={false}>
            <Icon size={30} color='#000' name='square-edit-outline'/>
          </Touchable>
          <Touchable onPress={() => {
            dispatch(removeAddress(address));
          }} feedback={false}>
            <Icon size={30} color='#000' name='delete-outline'/>
          </Touchable>
        </View>
      </View>
      <Headline>
        {address.street || 'street'}
      </Headline>
      <View className='flex-row'>
        <Footnote>
          {address.city || 'city'}
        </Footnote>
        <Text>
          {', '}
        </Text>
        <Footnote>
          {address.state || 'state'}
        </Footnote>
      </View>
      <View className='flex-row'>
        <Footnote>
          {address.pin || 'pin'}
        </Footnote>
      </View>
    </View>
  ) : (
    <View className='p-4 bg-white rounded-lg shadow-lg my-4'>
      <Shimmer active className='h-4 w-full'/>
      <Shimmer active className='h-4 w-full'/>
      <Shimmer active className='h-4 w-full'/>
      <Shimmer active className='h-4 w-full'/>
    </View>
  );
};
