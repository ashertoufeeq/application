import React, { useEffect } from 'react';

import { ToastContainer } from 'react-toastify';

import { getStorage } from 'common/storage';
import { notify } from 'helpers/alert';
import { css } from 'styles';

window.storage = getStorage(window.localStorage);
window.notify = notify;
window.css = css;

export const Initial = () => {
  useEffect(() => {}, []);

  return (
    <>
      <ToastContainer />
    </>
  );
};
