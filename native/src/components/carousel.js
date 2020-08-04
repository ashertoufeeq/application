import React, { useEffect, useState } from 'react';
import Carousel ,{ Pagination } from 'react-native-snap-carousel';
import { Touchable, View } from 'framework/surface';
import { Headline, Text, Title1,Title2 } from 'framework/text';
import { Dimensions } from 'react-native';
import { min } from "lodash-es";
import  CarouselImage1  from 'assets/svgs/carouselImage1.svg';
import CarouselImage2 from "assets/svgs/carouselImage2.svg";
import CarouselImage3 from "assets/svgs/carouselImage3.svg";
import { Storage } from 'common/helpers/shared';
import { BaseImage } from "./svg/index";

const CarouselDisplay = ({ image }) =>{
  console.log("inside carousel display");
  console.log({ image });
  if(image==="CarouselImage1"){
    return (
      <BaseImage
        originalWidth={888}
        originalHeight={741.04834}
        image={CarouselImage1}
        height={min([250, Dimensions.get('window').height / 2])}
              />
    );
  }
  if(image==="CarouselImage2"){
    return (
      <BaseImage
        originalWidth={888}
        originalHeight={741.04834}
        image={CarouselImage2}
        height={min([250, Dimensions.get('window').height / 2])}
              />
    );
  }
  return (
    <BaseImage
      originalWidth={888}
      originalHeight={741.04834}
      image={CarouselImage3}
      height={min([250, Dimensions.get('window').height / 2])}
              />
  );


}

const renderItem = ({ item, index }) => {
  const { image } = item;
  return (
    <View className='m-2 mt-auto mb-auto bg-gray-100 p-3 justify-center rounded '>
      <View className='p-5 mb-5'>
        <CarouselDisplay className='self-center' {...{ image }} />
      </View>
      <Title1 className='text-primary mt-5 mb-1 text-center'>{ item.title }</Title1>
      <View className='p-3 m-5'>
        <Text className='text-gray-500 text-center'>{item.description}</Text>
      </View>
    </View>
  );
}

const PaginationReturn = ({ entries,activeSlide }) => {
  return (
    <Pagination
      dotsLength={entries.length}
      activeDotIndex={activeSlide}
      dotStyle={{
        width: 10,
        height: 15,
        borderRadius: 5,
        marginHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.92)'
      }}
      inactiveDotStyle={{
        // Define styles for inactive dots here
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.8}
            />
  );
}

export const MyCarousel = ({ navigation }) => {
  const [activeSlide,setactiveSlide]=useState(1);
  useEffect(()=>{
    Storage().save({
      key: 'openFirstTime',
      data: {
        value:true
      }
    });
  });
  const handleOnPress = () => {
    navigation.navigate('SignIn');
  }
  const entries=[
    {
      title:"For The People ",
      image:"CarouselImage1",
      description:"A presentation on SECURE has been given to High Power Committee of MoRD during June 2017. In the meeting MoRD decided to replicate the SECURE software throughout the county ."
    },
    {
      title:"Secure and Easy ",
      image:"CarouselImage2",
      description:"A presentation on SECURE has been given to High Power Committee of MoRD during June 2017. In the meeting MoRD decided to replicate the SECURE software throughout the county ."
    },
    {
      title:"Safe Money Transfer ",
      image:"CarouselImage3",
      description:"A presentation on SECURE has been given to High Power Committee of MoRD during June 2017. In the meeting MoRD decided to replicate the SECURE software throughout the county ."
    }
  ];
  const sliderWidth=Dimensions.get('window').width;
  const itemWidth=Dimensions.get('window').width-10;
  return (
    <View className='bg-gray-300 h-full rounded'>
      <View className='text-primary'>
        <Title2 className='ml-3 my-3 '>
          Letss goo !!
        </Title2>
        <Carousel
          data={entries}
          renderItem={renderItem}
          onSnapToItem={(index) => setactiveSlide(index)}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth} />
      </View>
      <Touchable onPress={handleOnPress} className=''>
        <Headline className='font-semibold text-center ml-auto m-4'>
          Skip
        </Headline>
      </Touchable>
      <PaginationReturn {...{ entries,activeSlide }} />
    </View>
  );
}
