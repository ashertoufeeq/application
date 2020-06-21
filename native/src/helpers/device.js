import {Platform} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import {mapObjectAsync} from 'common/helpers/funcs';

export const extraDeviceInfo = (obj) =>
  mapObjectAsync(obj, async (key, value) => [key, await DeviceInfo[value]()]);

export const deviceInfo = () => ({
  app: DeviceInfo.getBundleId(),
  appVersion: DeviceInfo.getReadableVersion(),

  os: Platform.OS,
  osVersion: DeviceInfo.getSystemVersion(),

  browser: '',
  browserVersion: '',
});

export const fullDeviceInfo = () =>
  extraDeviceInfo({
    applicationName: 'getApplicationName',
    os: 'getSystemName',
    osVersion: 'getSystemVersion',
    buildId: 'getBuildId',
    brand: 'getBrand',
    buildNumber: 'getBuildNumber',
    bundleId: 'getBundleId',
    carrier: 'getCarrier',
    deviceType: 'getDeviceType',
    iosDeviceToken: 'getDeviceToken',
    androidFirstInstallTime: 'getFirstInstallTime',
    deviceModel: 'getModel',
    readableVersion: 'getReadableVersion',
    uniqueId: 'getUniqueId',
    userAgent: 'getUserAgent',
    version: 'getVersion',
    notch: 'hasNotch',
    emulator: 'isEmulator',
    protected: 'isPinOrFingerprintSet',
    tablet: 'isTablet',
  });
