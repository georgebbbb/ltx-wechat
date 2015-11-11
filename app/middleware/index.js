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

export function releaseUnitMiddleware({dispatch, getState }){
    return next => action => {
      if(action.type ===types.RELEASE_UNIT){
        console.log(6675);
        api.entrustAdd(action.query,2).then((data)=>{
          console.log(data);
          next(action);
        })
      }else{
        next(action);
      }
    }
}

export function fetchDistrictsMiddleware({dispatch, getState }){
    return next => action => {

      if(action.type ===types.FETCH_DISTRICTS){
        const state = getState();
        api.fetchDistricts({cityId:state.query.city.id}).then((data)=>{
          action.districts=data
          next(action);
        })
      }else{
        next(action);
      }
    }
}

export function fetchCommsMiddleware({dispatch, getState }){
    return next => action => {

      if(action.type ===types.FETCH_COMMS){
        console.log(11);
        const state = getState();
        api.fetchComms({districtId:state.query.city.district.id}).then((data)=>{

          action.comms=data.data
          next(action);
        })
      }else{
        next(action);
      }
    }
}
