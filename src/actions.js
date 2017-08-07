export const CHANGE_SQUARE_COLOR = 'CHANGE_SQUARE_COLOR';
export const CHANGE_CIRCLE_COLOR = 'CHANGE_CIRCLE_COLOR';

export const changeSquareColor = (color) => ({
  type: CHANGE_SQUARE_COLOR,
  payload: color,
});

export const changeCircleColor = (color) => ({
  type: CHANGE_CIRCLE_COLOR,
  payload: color,
});
