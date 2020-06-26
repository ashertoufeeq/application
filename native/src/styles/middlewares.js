import { mapObject, rgbaToHex } from 'shared/helpers/funcs';
import _ from 'lodash-es';

export const hexMiddleware = (style) => mapObject(style, (key, value) => {
  if (_.startsWith(value, 'rgba')) return [key, rgbaToHex(value)]
  return [key, value];
});
