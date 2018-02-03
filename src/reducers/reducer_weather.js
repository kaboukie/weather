import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // state.push(action.payload.data) DON'T DO THIS because it will mutate the existing state.  We need to return a new state.
      return [action.payload.data, ...state];
  }
  return state;
}