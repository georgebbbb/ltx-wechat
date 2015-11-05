import {FETCH_RENT} from '../constants';
const initialState={
  curPage:1,
  rents:[],
  totalCount:0

}

export default function area(state = initialState, action) {
  switch (action.type) {
  case FETCH_RENT:
    return Object.assign({}, state, {
      totalCount:action.totalCount,
      rents:state.rents.concat(action.rents),
    });
  default:
    return state;
  }
}
