module.exports = {
  path: 'houseDetail/:id',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/HouseDetail'))
    })
  }
}
