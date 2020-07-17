import React, { useState, useEffect } from 'react';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { Touchable, View, ScrollView } from 'framework/surface';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Text } from 'framework/text';
import _ from 'lodash-es';
import { LiveOrderCard } from '../../components/LiveOrderCard';

function randomStringGen(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < len; i += 1) {
    const randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

const dimensionArray = [4, 8, 12, 16, 20, 24, 32, 40];
const colorArray = ['green', 'blue', 'gray', 'red', 'teal', 'yellow'];
const colorWeight = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const RandomAnimatedView = ({ id }) => {
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(4);
  const [bgColor, setBgColor] = useState('green');
  const [bgWeight, setBgWeight] = useState(300);
  const [fontColor, setFontColor] = useState('green');
  const [fontWeight, setFontWeight] = useState(900);

  const animate = () => {
    const rw = _.random(dimensionArray.length - 1);
    setWidth(dimensionArray[rw]);

    const rh = _.random(dimensionArray.length - 1);
    setHeight(dimensionArray[rh]);

    const rbg = _.random(colorArray.length - 1);
    setBgColor(colorArray[rbg]);

    const rbgw = _.random(colorWeight.length - 1);
    setBgWeight(colorWeight[rbgw]);

    const rfc = _.random(colorArray.length - 1);
    setFontColor(colorArray[rfc]);

    const rfw = _.random(colorWeight.length - 1);
    setFontWeight(colorWeight[rfw]);
  };

  useEffect(() => {
    setInterval(animate, 500);
  }, []);

  return (
    <View className='border-green-900 border-b'>
      <Touchable onPress={() => animate()}>
        <View animate={`bg-${bgColor}-${bgWeight} p-4`}>
          <View animate={`w-${width} h-${height} bg-black`} />
          <Text animate={`text-${fontColor}-${fontWeight}`}>
            {id}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

const getItem = (data, index) => ({
  id: randomStringGen(20),
});

export const LiveOrdersScreen = ({ navigation }) => {
  const [rands, setRands] = useState([{ id: randomStringGen(20) }]);
  const addRand = () => {
    setRands([...rands, { id: randomStringGen(20) }]);
  };

  useEffect(() => {
    // setTimeout(() => setRands([...rands, { id: randomStringGen(20) }]), 1000);
  }, [rands.length]);

  return (
    <ScreenWrapper>
      <View style={{ height: getStatusBarHeight() }} />
      <Touchable onPress={addRand} scroll>
        <Text>
          Rands:
          {' '}
          {rands.length}
        </Text>
      </Touchable>
      <ScrollView>
        <View className='px-2'>
          <LiveOrderCard navigation={navigation} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
