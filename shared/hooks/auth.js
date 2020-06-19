import { useSelector } from 'react-redux';

/*
khjfgjhwvf hgewvgvewd eghdvegcd

 */
export const useUser = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return { user, isAuthenticated };
};
