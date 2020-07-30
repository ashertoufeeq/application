import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View,Touchable } from 'framework/surface';
import { Text } from 'framework/text';
import { Modal,Dimensions } from 'react-native';
import { BackButton } from 'components/BackButton';
import { ScrollView } from '../../framework/surface';


export const DropDownItem = ({ key,value,label,children,onChange }) => {
  return(
    <Touchable
      onPress={() => {
        onChange(value);
      }}
      key={key || value}
      className='p-2'>
      {children || <Text>{label}</Text>}
    </Touchable>
  )}

export const Dropdown = ({ selectedValue,children }) => {
  const [visible,setVisible] = useState(false)
  useEffect(()=>{
    setVisible(false)
  },[selectedValue,])
  return (
    <Touchable
      onPress={()=>{setVisible(true)}}
      className=' flex-nowrap m-2 px-2 py-1 rounded bg-gray-100
      flex-row justify-between items-center relative'
    >
      <Text ellipsizeMode='tail' numberOfLines={1}>{selectedValue}</Text>
      <View className=''>
        <Icon name='menu-down' color='#444' size={25} />
      </View>
      <Modal
        animationType='fade'
        transparent
        visible={visible}
        onRequestClose={() => {
          setVisible(false)
        }}
      >
        <Touchable
          className='items-center justify-center h-full'
          style={{
            backgroundColor: 'rgba(0,0,0,.5)' }}
          onPress={()=>setVisible(false)}
        >
          <View
            className='absolute inset-x0 bottom0 border-primary border-solid border-t4 bg-white'
            style={{ maxHeight: (Dimensions.get('window').height / 1.5) }}>
            <View className='flex-row'>
              <BackButton onPress={()=>{setVisible(false)}} />
            </View>
            <ScrollView
              className='flex-1'>
              <View className='rounded m-2 bg-white'>
                {children}
              </View>
            </ScrollView>
          </View>
        </Touchable>
      </Modal>
    </Touchable>
  );
};

