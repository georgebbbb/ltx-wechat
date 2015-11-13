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
  return {type:types.SET_CURRENT_DISTRICT,id}
}
export function fetchComms(){
  return {type:types.FETCH_COMMS}
}
export function setCurrentComm(id){
  return {type:types.SET_CURRENT_COMM,id}
}
export function setArea(min,max){
  return {type:types.SET_AREA,min,max}
}
export function setPrice(min,max){
  return {type:types.SET_PRICE,min,max}
}

export function fetchBuildings(){
  return {type:types.FETCH_BUILDINGS}
}
export function addBuildings(){
  console.log(787665);
  return {type:types.ADD_BUILDINGS}
}
