import api from './index';

export const registerNativeDevice = (id, deviceInfo) =>
  api.patch(`/device/register/native/${id}/`, deviceInfo, { secure: false });
