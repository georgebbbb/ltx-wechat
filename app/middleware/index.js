import api from "../api";
import * as types from '../constants';


export function fetchBuildingsMiddleware({dispatch, getState }){
    return next => action => {
      if(action.type ===types.FETCH_BUILDING){
        api.fetchBuilding().then(data=>{
          action.building=data.data;
          next(action);
        })

      }else{
        next(action);
      }
    }
}

export function fetchRentMiddleware({dispatch, getState }){
    return next => action => {
      if(action.type ===types.FETCH_RENT){
        const state = getState();
        api.fetchRent({
          curPage:state.curPage,
          buildingId:960
        }).then(data=>{
          console.log(7777,data);
          action.rents=data.data.resultList;
          action.totalCount =data.data.totalCount;
          action.curPage=state.curPage+1;
          next(action);
        })
      }else{
        next(action);
      }
    }
}
