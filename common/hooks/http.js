import { useState, useEffect } from 'react';
import api from '../api';

const defaultHttpResponse = {
  data: undefined,
  error: null,
  loading: true,
  status: 0,
  _fromCache: false,
};

export const useHttpGet = (url, opts) => {
  const [response, setResponse] = useState(defaultHttpResponse);
  const [refreshCount, setRefreshCount] = useState(0);
  const { defaultData, refresh: refreshSetting = true, ...options } = opts;

  const overrideResponse = (override) => setResponse({ ...response, ...override });
  const reload = () => setRefreshCount(refreshCount + 1);
  const refresh = (res) => {
    if (refreshSetting)
      // eslint-disable-next-line no-underscore-dangle
      if (response._fromCache) setResponse(res);
  };


  useEffect(() => {
    setResponse(defaultHttpResponse);

    const load = async () => {
      overrideResponse(defaultHttpResponse);
      if (defaultData)
        overrideResponse({ data: defaultData });

      overrideResponse(await api.get(url, options, refresh));
    };

    load().then();

  }, [url, options, refreshCount]);

  return { ...response, reload };
};
