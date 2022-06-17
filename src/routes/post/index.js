const MainPostRouter = require('express').Router();

MainPostRouter.route('/create')
  .get(require('./post.view.js'))
  .post(require('./createPost.js'));

module.exports = MainPostRouter;