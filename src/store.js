import { createStore } from 'redux'
import { todoApp } from './reducers'

const initialState = {
  color: 'black',
};

export const store = createStore(
  todoApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);