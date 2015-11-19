import api from "../api";
import * as types from '../constants';

export function fetchBuildingMiddleware({dispatch, getState }){
    return next => action => {
      if(action.type ===types.FETCH_BUILDING){
        const state =  getState()
        api.fetchBuilding(state.building.building.id).then(data=>{
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
        const query ={
          maxPrice:state.query.price.max,
          minPrice:state.query.price.min,
          maxArea :state.query.area.max,
          minArea :state.query.area.min,
          cityId  :state.query.city.id,
          districtId : state.query.city.district.id,
          commId: state.query.city.district.comm.id,
          pageSize:4,
          buildingId:state.router.params.id,
          curPage:state.rent.curPage
        }
        console.log(query);

        api.fetchRent(query).then(data=>{
          action.rents=data.data.resultList;
          console.log(data);
          action.totalCount =data.data.totalCount;
          action.curPage=state.rent.curPage+1;
          console.log(data.data);
          action.isMore = (data.data.totalCount>state.rent.curPage*12 )
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


        api.fetchDistricts({cityId:state.query.city.id}).then((data)=>{
          action.districts=data
          action.districts.unshift({
            id:null,
            name:"不限"
          })

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
          action.comms.unshift({
            id:null,
            name:"不限"
          })

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
          action.isBottom=false;
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

          if(state.query.curPage>1&&data.data.resultList.length==0){
            action.isBottom=true
          }
          next(action);
        })
      }else{
        next(action);
      }
    }
}
export function fetchBuildingImagesMiddleware({dispatch, getState }){
    return next => action => {

      if(action.type ===types.FETCH_BUILDING_IMAGES){

        const state = getState();

        api.fetchBuildingImages(state.router.params.id).then((data)=>{

          action.images = data.data.map((ele)=>{
            return ele.path
          })
          next(action);
        })
      }else{
        next(action);
      }
    }
}
