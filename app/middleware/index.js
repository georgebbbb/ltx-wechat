import api from "../api";
import * as types from '../constants';

export function fetchBuildingMiddleware({dispatch, getState }){
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

        api.entrustAdd(action.query,2).then((data)=>{

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
        console.log(state.query.city.id);
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

export function fetchBuildingsMiddleware({dispatch, getState }){
    return next => action => {

      if(action.type ===types.FETCH_BUILDINGS){
        const state = getState();
        const query ={
          maxPrice:state.query.price.max,
          minPrice:state.query.price.min,
          maxArea :state.query.area.max,
          minArea :state.query.area.min,
          cityId  :state.query.city.id,
          districtId : state.query.city.district.id,
          commId: state.query.city.district.comm.id,
          pageSize:4
        }

        api.fetchBuildings(query).then((data)=>{
          action.buildings=data.data.resultList
          action.curPage=2;
          next(action);
        })
      }else{
        next(action);
      }
    }
}


export function addBuildingsMiddleware({dispatch, getState }){
    return next => action => {

      if(action.type ===types.ADD_BUILDINGS){

        const state = getState();
        const query ={
          curPage:state.query.curPage,
          maxPrice:state.query.price.max,
          minPrice:state.query.price.min,
          maxArea :state.query.area.max,
          minArea :state.query.area.min,
          cityId  :state.query.city.id,
          districtId : state.query.city.district.id,
          commId: state.query.city.district.comm.id,
          pageSize:4
        }

        api.fetchBuildings(query).then((data)=>{
          action.buildings=data.data.resultList
          action.curPage=state.query.curPage+1;
          next(action);
        })
      }else{
        next(action);
      }
    }
}
