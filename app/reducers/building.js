import {FETCH_BUILDING,FETCH_BUILDINGS,ADD_BUILDINGS,SET_CURRENT_BUILDING,CLEAR_BUILDING,FETCH_BUILDING_IMAGES} from '../constants';
const initialState={
  buildings:[],
  isBottom:false,
  isNull  :false,
  building:{


  },
  images:[]

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
      isBottom:action.isBottom,
      isEntrust:action.isEntrust
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
    case FETCH_BUILDING_IMAGES:
      return Object.assign({}, state, {
        images:action.images
      });
  default:
    return state;
  }
}
