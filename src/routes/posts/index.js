const MainPostsRouter = require('express').Router();

MainPostsRouter.route('/')
  .get(require('./posts.view.js'));

module.exports = MainPostsRouter;