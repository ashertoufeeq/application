import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { View, Touchable } from 'framework/surface';
import { Text, Title1, Headline, Title } from 'framework/text';

export const CustomModal = ({
  visible,
  setVisible,
  title,
  children,
  Appear,
  appearContainerStyle,
}) => {
  return (
    <View>
      {Appear ? (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setVisible(true);
          }}
          style={appearContainerStyle}>
          <Appear />
        </TouchableOpacity>
      ) : null}
      <Modal
        presentationStyle={'overFullScreen'}
        animationType='slide'
        onRequestClose={() => {
          setVisible(false);
        }}
        visible={visible}>
          {children}
          <Touchable className='justify-center mx-2' onPress={()=>{setVisible(false)}}>
            <Headline className='text-gray-600'>
              Back
            </Headline>
        </Touchable>
      </Modal>
    </View>
  );
};
