import { TransitionPresets } from '@react-navigation/stack';

export const modalConfigs= {
  gestureDirection: 'vertical',
  gestureEnabled: true,
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  cardOverlayEnabled: true,
  ...TransitionPresets.ModalPresentationIOS,
}
