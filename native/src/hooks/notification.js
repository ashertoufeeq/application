import { useEffect } from 'react';
import Notification from 'react-native-onesignal';
import secrets from 'common/secrets';
import { deviceInfo } from 'helpers/device';
import { Storage } from 'common/helpers/shared';
import { registerNativeDevice } from 'common/api/device';

const onReceived = async (notification) => {
  console.log('Notification received: ', notification);
};

const onOpened = async (openResult) => {
  console.log('Message: ', openResult.notification.payload.body);
  console.log('Data: ', openResult.notification.payload.additionalData);
  console.log('isActive: ', openResult.notification.isAppInFocus);
  console.log('openResult: ', openResult);
};

const register = async ({ userId, pushToken }) => {
  const info = await deviceInfo();
  console.log('register device...', info);
  const { error } = await registerNativeDevice(userId, { pushToken, ...info });
  if (!error)
    await Storage().save({ key: 'device', id: 'userId', data: userId });
};

const onIds = async (device) => {
  console.log('Push info: ', device);
  try {
    const id = await Storage().load({ key: 'device', id: 'userId' });
    if (id === device.userId) return;
  } catch (error) {
    // pass
  }

  await register(device);
};

export const useNotification = () => {
  useEffect(() => {
    Notification.setLogLevel(6, 0);

    Notification.init(secrets.ONESIGNAL_APP_ID, {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    Notification.inFocusDisplaying(2);

    Notification.addEventListener('received', onReceived);
    Notification.addEventListener('opened', onOpened);
    Notification.addEventListener('ids', onIds);

    return () => {
      Notification.removeEventListener('received', onReceived);
      Notification.removeEventListener('opened', onOpened);
      Notification.removeEventListener('ids', onIds);
    };
  }, []);

  return null;
};
