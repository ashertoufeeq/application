import React, { useEffect, useState } from 'react';
import { View, Text,  StyleSheet, Image ,PermissionsAndroid,Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white'
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  }
})

export const  GetLocation =()=> {
  const [location,setLocation] = useState({
    currentLongitude: 'unknown',
    currentLatitude: 'unknown',
  })

  const [watchId,setWatchId] = useState(0)

  const callLocation=()=>{
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        console.log('Location',currentLongitude,currentLatitude)
        setLocation({ currentLatitude,currentLongitude })
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    setWatchId(Geolocation.watchPosition((position) => {
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      const currentLatitude = JSON.stringify(position.coords.latitude);
      console.log('Location',currentLongitude,currentLatitude)
      setLocation({ currentLatitude,currentLongitude })
    }));
  }

  useEffect(()=>{
    const requestLocationPermission= async ()=> {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
            'title': 'Location Access Required',
            'message': 'This App needs to Access your location'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // To Check, If Permission is granted
          callLocation();
        } else {
          alert("Permission Denied");
        }
      } catch (err) {
        alert("err",err);
        console.warn(err)
      }
    }
    if(Platform.OS === 'ios'){
      callLocation();
    }else{
      requestLocationPermission();
    }
    return Geolocation.clearWatch(watchId);
  },[])
  return (
    <View style={styles.container}>
      <Image
        source={{ uri:'https://png.icons8.com/dusk/100/000000/compass.png' }}
        style={{ width: 100, height: 100 }}
        />
      <Text style={styles.boldText}>
        You are Here
      </Text>
      <Text style={{ justifyContent:'center',alignItems: 'center',marginTop:16 }}>
        Longitude:
        {' '}
        {location.currentLongitude}
      </Text>
      <Text style={{ justifyContent:'center',alignItems: 'center',marginTop:16 }}>
        Latitude:
        {' '}
        {location.currentLatitude}
      </Text>
    </View>
  )
}
