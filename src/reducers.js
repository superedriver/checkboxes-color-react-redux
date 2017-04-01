import { CHANGE_COLOR } from './constants'

export function todoApp(state, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        color: action.payload,
      };
    default:
      return state
  }
}
