import {FETCH_BUILDING,FETCH_BUILDINGS,ADD_BUILDINGS} from '../constants';
const initialState={
  buildings:[]

}

export default function area(state = initialState, action) {
  switch (action.type) {
  case FETCH_BUILDING:
    return Object.assign({}, state, action.building);
  case FETCH_BUILDINGS:
    return Object.assign({}, state, {
      buildings:action.buildings
    });
  case ADD_BUILDINGS:
    return Object.assign({}, state, {
      buildings:[
        ...state.buildings,
        ...action.buildings
      ]
    });

  default:
    return state;
  }
}
