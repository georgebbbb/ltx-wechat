


module.exports = {
  path: 'buildingList',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/BuildingList'))
    })
  }
}
