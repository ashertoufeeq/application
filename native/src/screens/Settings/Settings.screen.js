import React from 'react';
import { ScreenWrapper } from 'components/ScreenWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Touchable, Image, } from 'framework/surface';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useGoogleAuthentication } from 'hooks/auth';
import { useUser } from 'common/hooks/auth';
import { Headline,Title2,Footnote } from 'framework/text';
import { ProfileImage } from 'components/svg/ProfileImage';
import Profile from 'assets/Profile.jpeg';
import { Shimmer } from 'framework/utils';


const SignInMenu = ({ navigation }) =>(
  <View className='p-4 flex-row justify-between items-center border-b border-gray-500'>
    <ProfileImage height={64} width={64} className='mr-4 ml-2' />
    <Touchable
      className='bg-primary justify-center p-2 rounded mx-2'
      onPress={()=>{navigation.push('SignIn')}}>
      <Headline className='text-white'>
        Sign In
      </Headline>
    </Touchable>
  </View>
)

const UserInfo = ({ signOut,user }) =>(
  <View className='p-4 flex-row justify-start items-center border-b border-gray-500'>
    <Shimmer active={!user.image} className='h-16 w-16 rounded-full'>
      <Image
        className='h-16 w-16 rounded-full bg-gray-500 ml-2 mr-4'
        source={{ uri:user.image }}
     />
    </Shimmer>
    <View className='justify-between'>
      <Shimmer active={!user.firstName} className='h-4 w-64'>
        <Title2 className='text-primary'>
          {user.firstName ||'Asher'}
          {' '}
          {user.lastName || 'Toufeeq'}
        </Title2>
      </Shimmer>
      <Shimmer active={!user.email} className='h-4 w-64'>
        <Headline className='text-primary'>
          {user.email || 'ashertoufeeq@gmail.com'}
        </Headline>
      </Shimmer>
      <Shimmer active={!user.lastName} className='h-4 w-64'>
        <Touchable
          className='justify-start'
          onPress={()=>{signOut()}}>
          <Footnote className='text-gray-700'>
            Sign Out
          </Footnote>
        </Touchable>
      </Shimmer>
    </View>
  </View>
)

export const SettingsScreen = ({ navigation }) => {
  const { user, isAuthenticated } = useUser();
  const { signOut } = useGoogleAuthentication();
  return (
    <ScreenWrapper>
      <View style={{ height: getStatusBarHeight() }} />
      {isAuthenticated? (
        <UserInfo
          navigation={navigation}
          signOut={signOut}
          isAuthenticated={isAuthenticated}
          user={user||
        { email:'ashertoufeeq@gmail.com',firstName:'Asher',lastName:'Toufeeq',image:Profile }} />
      ):<SignInMenu navigation={navigation} />}
      <Touchable
        feedback={false}
        onPress={()=>navigation.navigate('Addresses')}
        className='p-4 flex-row justify-between items-center border-b border-gray-500'>
        <Headline>
          Manage Addresses
        </Headline>
        <Icon name='chevron-right' color='#000' size={30} />
      </Touchable>
    </ScreenWrapper>
  );
};
