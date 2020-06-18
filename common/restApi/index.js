import axios from 'axios';
import decode from 'jwt-decode';
import { Storage } from '../helpers/shared';

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

export const load = async (url, opts = {}) => {
  const {
    onSuccess = (data) => data,
    onFailure = (error) => error,
    secure = true,
    defaultData,
    headers,
    ...options
  } = opts;

  try {
    const res = await axios(url, {
      headers: {
        ...(secure ? { Authorization: `Bearer ${await getAccessToken()}` } : {}),
        ...headers,
      },
      ...options,
    });

    const { data, status } = res;
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
