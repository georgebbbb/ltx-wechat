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
  },
  //entrust 1 release 2
  entrustAdd:function(query,type){
    query.type=type;
    return reqwest({
      url: host+"/entrust/add",
      method: 'get',
      data:query
    })
  },
  fetchDistricts: function(query) {
  return reqwest({
    url: host+"/map/findDistrictStat",
    method: 'get',
    data: query
    })
  },
  fetchComms: function(query) {
  return reqwest({
    url: host+"/map/findCommStat",
    method: 'get',
    data: query
    })
  }
}
