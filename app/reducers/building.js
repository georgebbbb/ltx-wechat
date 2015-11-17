import {FETCH_BUILDING,FETCH_BUILDINGS,ADD_BUILDINGS,SET_CURRENT_BUILDING,CLEAR_BUILDING} from '../constants';
const initialState={
  buildings:[],
  isBottom:false,
  building:{

  }

}

export default function area(state = initialState, action) {
  switch (action.type) {
  case FETCH_BUILDING:
    return Object.assign({}, state, {
      building:action.building
    });
  case FETCH_BUILDINGS:
    return Object.assign({}, state, {
      buildings:action.buildings,
      isBottom:action.isBottom
    });
  case ADD_BUILDINGS:
    return Object.assign({}, state, {
      buildings:[
        ...state.buildings,
        ...action.buildings
      ],
      isBottom:action.isBottom
    });
  case SET_CURRENT_BUILDING:
    return Object.assign({}, state, {
      building:{
        ...state.building,
        id:action.id
      }
    });
    case CLEAR_BUILDING:
      return Object.assign({}, state, {
        building:{
          id:state.building.id
        }
      });
  default:
    return state;
  }
}
