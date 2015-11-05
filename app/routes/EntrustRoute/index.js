module.exports = {
  path: 'entrust',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Entrust'))
    })
  }
}
