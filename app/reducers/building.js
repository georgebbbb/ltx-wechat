import {FETCH_BUILDING} from '../constants';
const initialState={

}

export default function area(state = initialState, action) {
  switch (action.type) {
  case FETCH_BUILDING:
    return Object.assign({}, state, action.building);
  default:
    return state;
  }
}
