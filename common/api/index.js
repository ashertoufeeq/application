import realAxios from 'axios';
import decode from 'jwt-decode';

import { API_BASE_URL } from 'common/secrets';

import { snakeCaseObject, camelCaseObject } from 'common/helpers/funcs';
import { Storage } from 'common/helpers/shared';

const axios = realAxios.create({ baseURL: API_BASE_URL });


const requestDataToSnakeCase = (url, options) => {
  if (options.data)
    // eslint-disable-next-line no-param-reassign
    options.data = snakeCaseObject(options.data);

  if (options.params)
    // eslint-disable-next-line no-param-reassign
    options.params = snakeCaseObject(options.params);

  return options;
};

const responseDataToCamelCase = (data) => camelCaseObject(data);

const getAccessToken = async () => {
  const access = await Storage().load({ key: 'apiTokens', id: 'access' });
  const accessPayload = decode(access);
  if (new Date(parseInt(accessPayload.exp, 10) * 1000) > new Date()) return access;

  const refresh = await Storage().load({ key: 'apiTokens', id: 'refresh' });
  const {
    data: { access: newAccessToken },
  } = await axios.post('/api/token/refresh/', { refresh });
  await Storage().save({ key: 'apiTokens', id: 'access', data: access });

  return newAccessToken;
};

const load = async (url, opts = {}) => {
  const {
    onSuccess = (data) => data,
    onFailure = (error) => error,
    secure = true,
    defaultData,
    headers,
    requestMiddlewares=[requestDataToSnakeCase],
    responseMiddlewares=[responseDataToCamelCase],
    ...options
  } = opts;

  try {
    let finalOptions = {
      headers: {
        ...(secure ? { Authorization: `Bearer ${await getAccessToken()}` } : {}),
        ...headers,
      },
      ...options,
    };
    
    // eslint-disable-next-line no-restricted-syntax
    for (const middleware of requestMiddlewares)
      finalOptions = middleware(url, finalOptions);
    
    const res = await axios(url, finalOptions);

    let { data } = res;
    const { status } = res;
    for (const middleware of responseMiddlewares)
      data = middleware(data, status, url, finalOptions);
    
    await onSuccess(data);
    return { data, status, error: undefined, loading: false };
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      await onFailure(data);
      return { data: undefined, status, error: data, loading: false };
    }

    if (error.request) {
      const e = { message: 'error in request setup' };

      // noinspection JSCheckFunctionSignatures
      return { data: undefined, status: 0, error: e, loading: false };
    }

    throw Error(error);
  }
};


const loadDataMethod = (method) => (url, data, options = {}) => load(url,
  { method, data, ...options },
);
const loadMethod = (method) => (url, options) => load(url, { method, ...options });

export default {
  'axios': axios,
  'request': load,
  'get': loadMethod('GET'),
  'delete': loadMethod('DELETE'),
  'head': loadMethod('HEAD'),
  'options': loadMethod('OPTIONS'),
  'post': loadDataMethod('POST'),
  'put': loadDataMethod('PUT'),
  'patch': loadDataMethod('PATCH'),
};