import reqwest from 'reqwest';
const host = "/api";
export default {
  fetchBuilding:function(){
    return reqwest({
      url: host+"/building/info/960",
      method: 'get'
    })
  },

  fetchRent:function(query){
    return reqwest({
      url: host+"/unit/findRentByBuildingId",
      method: 'get',
      data:query
    })
  }
}
