import * as types from '../constants';

export function fetchBuilding(){
  return {type:types.FETCH_BUILDING}
}
export function fetchRent(id){
  return {type:types.FETCH_RENT,id}
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
  return {type:types.ADD_BUILDINGS}
}

export function setCurrentBuilding(id){
  return {type:types.SET_CURRENT_BUILDING,id}
}

export function setCurrentCity(id){
  console.log(id);
  return {type:types.SET_CURRENT_CITY,id}
}

export function clearBuilding(){
  return {type:types.CLEAR_BUILDING}
}
export function clearRent(){
  return {type:types.CLEAR_RENT}
}

export function fetchBuildingImages(){
  return {type:types.FETCH_BUILDING_IMAGES}
}
