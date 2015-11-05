import {RELEASE_UNIT} from '../constants';
const initialState={
  success:false
}

export default function area(state = initialState, action) {
  switch (action.type) {
  case RELEASE_UNIT:
    return Object.assign({}, state, {
      success:action.success
    });
  default:
    return state;
  }
}
