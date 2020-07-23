import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View,Touchable } from 'framework/surface';
import { Text } from 'framework/text';
import { Modal,Dimensions } from 'react-native';
import { ScrollView } from '../../framework/surface';

export const DropDownItem = ({ key,value,label,children,onChange }) => (
  <Touchable onPress={()=>onChange(value)} key={key || value} className='bg-white p-2'>
    {children || <Text>{label}</Text>}
  </Touchable>
)

export const Dropdown = ({ selectedValue,children }) => {
  const [visible,setVisible] = useState(false)
  useEffect(()=>{
    setVisible(false)
  },[selectedValue])
  return (
    <Touchable
      onPress={()=>{setVisible(true)}}
      className='m-2 px-2 border rounded border-gray-500
      flex-1 flex-row justify-between items-center'
    >
      <Text>{selectedValue || 'Select'}</Text>
      <Icon name='menu-down' color='#444' size={25} />
      <Modal
        animationType='slide'
        transparent
        visible={visible}
        onRequestClose={() => {
          setVisible(false)
        }}
      >
        <View
          className='items-center justify-center h-full'
          style={{
            backgroundColor: 'rgba(0,0,0,.5)' }}
        >
          <View
            className='bg-white'
            style={{
              backgroundColor:'rgba(0,0,0,0)',
              width:Dimensions.get('window').width-30 ,
              height:Dimensions.get('window').height/2
            }}>
            <ScrollView
              className='flex-1'>
              {children}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </Touchable>
  );
};

