import api from 'common/api/index';

export const signInAPI = ({ googleId, token }) =>
  api.post(`/auth/sign-in/google/`, { googleId, token }, { secure: false });

export const getUserMetaAPI = () => api.get(`/auth/meta/`);

export const signOutAPI = () => api.get(`/auth/sign-out/`);
