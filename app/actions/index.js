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
