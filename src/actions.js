import { CHANGE_COLOR } from './constants';

export const changeColor = (color) => ({
  type: CHANGE_COLOR,
  payload: color,
});
