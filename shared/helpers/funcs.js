import _camelCase from 'lodash/camelCase';
import _snakeCase from 'lodash/snakeCase';

export const mapObjectAsync = async (obj, func, onError=() => null) => {
  const newObj = {};

  if (typeof obj === 'object' && obj !== null)
    for (const o in obj)
      if (Object.prototype.hasOwnProperty.call(obj, o)) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const [key, value] = await func(o, obj[o]);
          newObj[key] = value; 
        } catch (e) {
          // pass
          newObj[o] = onError(o, obj[o], e);
        }
      }

  return newObj;
};


export const mapObject = (obj, func) => {
  const newObj = {};

  if (typeof obj === 'object' && obj !== null)
    for (const o in obj)
      if (Object.prototype.hasOwnProperty.call(obj, o)) {
        const [key, value] = func(o, obj[o]);
        newObj[key] = value;
      }

  return newObj;
};

export const camelCaseObject = (obj) => {
  if (typeof obj === 'object' && obj !== null)
    return mapObject(obj, (key, value) => [_camelCase(key), camelCaseObject(value)]);

  return obj;
};

export const snakeCaseObject = (obj) => {
  if (typeof obj === 'object' && obj !== null)
    return mapObject(obj, (key, value) => [_snakeCase(key), snakeCaseObject(value)]);

  return obj;
};
