import {FETCH_DISTRICTS,SET_CURRENT_DISTRICT,FETCH_COMMS,SET_CURRENT_COMM,SET_AREA,SET_PRICE} from '../constants';
const initialState={
  city:{
    id:802,
    districts:[],
    name:"上海",
    district:{
      comms:[],
      id:null,
      comm:{
        id:null
      }
    }
  },
  area:{
    min:0,
    max:null,
  },
  price:{
    min:0,
    max:null,
  },
  curPage:1
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
      });
    case SET_CURRENT_COMM:
        return Object.assign({},state,{
          city:{
            ...state.city,
            district:{
              ...state.city.district,
              comm:{
                ...state.city.district.comm,
                id:action.id
              }
            }
          }
        })
    case SET_AREA:
        return Object.assign({},state,{
          area:{
            min:action.min,
            max:action.max
          }
        })
    case SET_PRICE:
          return Object.assign({},state,{
            price:{
              min:action.min,
              max:action.max
            }
          })
    case ADD_BUILDINGS:
      return Object.assign({},state,{
        price:action.curPage
      })

    case FETCH_BUILDINGS:
        return Object.assign({},state,{
          price:action.curPage
        })
  default:
    return state;
  }
}
