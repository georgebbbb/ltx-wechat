import {FETCH_DISTRICTS,SET_CURRENT_DISTRICT,FETCH_COMMS} from '../constants';
const initialState={
  city:{
    id:802,
    districts:[],
    name:"上海",
    district:{
      comms:[],
      id:0
    }
  }




}

export default function area(state = initialState, action) {
  switch (action.type) {
  case FETCH_DISTRICTS:
    return Object.assign({}, state, {
      city:{
        ...state.city,
        districts:action.districts
      }
    });
    case SET_CURRENT_DISTRICT:
      return Object.assign({}, state, {
        city:{
          ...state.city,
          district:{
            ...state.city.district,
            id:action.id
          }
        }
      });
    case FETCH_COMMS:
      return Object.assign({},state,{
        city:{
          ...state.city,
          district:{
            ...state.city.district,
            comms:action.comms
          }
        }
      })
  default:
    return state;
  }
}
