import * as types from '../constants';

export function fetchBuilding(){
  return {type:types.FETCH_BUILDING}
}
export function fetchRent(){
  return {type:types.FETCH_RENT}
}
export function releaseUnit(query){
  return {type:types.RELEASE_UNIT,query}

}

export function entrustUnit(){

}

export function fetchDistricts(){
  return {type:types.FETCH_DISTRICTS}
}
export function setCurrentDistrict(id){
  console.log(999,id);
  return {type:types.SET_CURRENT_DISTRICT,id}
}
export function fetchComms(){
  return {type:types.FETCH_COMMS}
}
