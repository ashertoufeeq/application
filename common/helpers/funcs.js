import _camelCase from 'lodash/camelCase';
import _snakeCase from 'lodash/snakeCase';

export const mapObject = (obj, func) => {
  const newObj = {};

  if (typeof obj === 'object' && obj !== null)
    // eslint-disable-next-line no-restricted-syntax
    for (const o in obj)
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(o)) {
        // eslint-disable-next-line no-param-reassign
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
