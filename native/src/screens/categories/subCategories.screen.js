import React, { useState } from 'react';
import { ScrollView,View, Touchable } from 'framework/surface';
import { Headline, Title2 ,Text } from 'framework/text';
import { useHttpList } from "common/hooks/http";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScreenWrapper } from "../../components/ScreenWrapper.native";


const HandleTouch = ({ child,reRender,setreRender ,index }) => {
  const handleSubmit = () => {
    let temp=child;
    temp=temp.charAt(0).toLowerCase() + temp.slice(1);
    temp=temp.replace(/ /g, "-");
    const uRl=`${reRender}/${temp}`;
    setreRender(uRl);
  };
  return (
    <Touchable className='flex-row flex-wrap m-1 p-1 bg-gray-100' key={index.toString()} onPress={handleSubmit}>
      <Icon color='#000' size={25} name='rocket' />
      <Text className='text-lg ml-3'>
        {child}
      </Text>
    </Touchable>
  )
}
const SubScreen = ({  childRepresentation,reRender,setreRender }) => {
  const children=[];
  const len=reRender.length;
  (childRepresentation||[]).forEach((child)=>{
    let temp=child.slice(len+1);
    temp=temp.charAt(0).toUpperCase() + temp.slice(1);
    temp=temp.replace(/-/g, " ");
    children.push(temp);
  });
  return(
    <View className='p-1 m-1 flex-1 '>
      {(children || []).map((child, index) => (
        <HandleTouch {...{ child,reRender,setreRender,index }} />
      ))}
    </View>
  );
}

export const SubCategoriesScreen = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { url } = props.route.params;
  const [reRender,setreRender]=useState(url);
  const uRl=`/shop/categories/${reRender}`;
  const { data }=useHttpList(uRl,{
    limit: 5,
    secure: true,
    replaceMode: false,
    autoLoad: true,
  });
  const { childRepresentation } =data||{ childRepresentation:{} };
  const { name }=data || { name:"Loading...." };
  return(
    <ScreenWrapper className='flex-1 w-100'>
      <ScrollView>
        <View className='m-2'>
          <Title2>{name}</Title2>
          <SubScreen {...{ childRepresentation,reRender,setreRender }} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}
