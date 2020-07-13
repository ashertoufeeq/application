import React,{ useState } from 'react';
import {FORM_ELEMENT_TYPES} from 'shared/constants/formFields.constant';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {View, Touchable} from 'framework/surface';
import {Text, LargeTitle, Title2,TextInput} from 'framework/text';


export const FormItemCreaterNative = (Field, form, onChangeForm) => {
  const [show, setShow] = useState(false);

  switch (Field.type) {
    case FORM_ELEMENT_TYPES.DATE:return(
      <View className={'flex-column w-full'} key={Field.key}>
      <View className={'flex-row'}>
        <Text>
          {Field.title}
          {' : '}
        </Text>
        <Touchable onPress={()=>{setShow(true)}}>
          <Text>
            {/*{nativeDateFormatter(form[Field.key])}*/}
          </Text>
        </Touchable>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={form[Field.key]}
            mode='datetime'
            display='default'
            onChange={(itemValue, selectedDate) => {
              setShow(false)
              onChangeForm({ ...form, [Field.key]: selectedDate }, Field);
            }}
        />
        )}
      </View>
      </View>
    )
    case FORM_ELEMENT_TYPES.RADIO:
      return (
        <View className={'flex-column w-full'} key={Field.key}>
          <View className={'flex-row'}>
            <View>
              <Text>{Field.title}</Text>
            </View>
            <Picker
              selectedValue={form[Field.key]}
              style={{ flex: 1 }}
              onValueChange={(itemValue, index) => {
                onChangeForm({ ...form, [Field.key]: itemValue }, Field);
              }}>
              <Picker.Item
                label='Choose...'
                /* eslint-disable-next-line no-nested-ternary */
                value=''
                key='choose'
              />
              {Field.radioOptions.map((Item) => (
                <Picker.Item
                  label={Item.label || Item}
                  /* eslint-disable-next-line no-nested-ternary */
                  value={Item.value || Item}
                  key={Item.value || Item}
                />
              ))}
            </Picker>
          </View>
        </View>
      );
    case FORM_ELEMENT_TYPES.INPUT:
      return (
        <View className={'flex-column w-full'} key={Field.key}>
          <View className={'flex-row'}>
            {Field.showHeading?(
              <Text>
                {Field.title}
                {' : '}
              </Text>
            ):null}
            {Field.icon ? (
              <Icon name={Field.icon.name} size={Field.icon.size} color={Field.icon.color} />
            ) : null}
            <View>
              <TextInput
                value={form[Field.key]}
                onChangeText={(text) => {
                  onChangeForm({ ...form, [Field.key]: text }, Field);
                }}
                placeholder={Field.title}
                {...Field.inputParams}
              />
            </View>
            {Field.RightComponent}
          </View>
        </View>
      );
    default:
      return null;
  }
};
