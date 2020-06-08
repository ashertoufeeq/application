import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sessionStarted } from 'common/actions/demo';

window.$ = (str) => str;

export const Initial = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sessionStarted());
  }, [dispatch]);

  return null;
};
