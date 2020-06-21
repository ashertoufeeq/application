import { useEffect } from 'react';
import { deviceInfo } from 'native/src/helpers/device';
import { registerDeviceAPI } from 'shared/api/device';
import { Storage } from 'common/helpers/shared';

export const useNotification = () => {
  useEffect(() => {
    const device = deviceInfo();
    window.device = device;
    window.OneSignal.push(async () => {
      const userId = window.OneSignal.getUserId();
      window.device = { ...device, id: userId };

      try {
        const id = await Storage().load({ key: 'device', id: 'userId' });
        if (id === device.userId) return;
      } catch (error) {
        // pass
      }

      const { error } = await registerDeviceAPI(userId, {});
      if (!error) await Storage().save({ key: 'device', id: 'userId', data: userId });
    });
  }, []);

  return null;
};
