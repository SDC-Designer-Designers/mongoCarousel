const router = require('express').Router()
const controllers = require('./controllers.js')

router.route('/carousel-service/:id')
  .get(controllers.get)
// router.route('/poster')
//   .post(controllers.post)
// router.route('/put')
//   .put(controllers.put)
// router.route('/delete')
//   .delete(controllers.delete)
  
  module.exports = router