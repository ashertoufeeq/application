import { CHANGE_PRIMARY_COLOR } from './index';
import { PRIMARY_COLOR } from '../secrets.json';

export const changePrimaryColor = (color = PRIMARY_COLOR) => ({
  type: CHANGE_PRIMARY_COLOR,
  color
});
