const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, PostType } = require('./types')
const { User, Post, Follow } = require('../models')

const users = {
  type: new GraphQLList(UserType),
  description: 'Query all users in the database',
  resolve(parent, args) {
    return User.find()
  }
}

const userById = {
  type: UserType,
  description: 'Query user by id',
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return User.findById(args.id)
  }
}

const userByUsername = {
  type: UserType,
  description: 'Query user by username',
  args: {
    username: { type: GraphQLString }
  },
  resolve(parent, args) {
    return User.findOne({ username: args.username })
  }
}

const userByEmail = {
  type: UserType,
  description: 'Query user by email',
  args: {
    email: { type: GraphQLString }
  },
  resolve(parent, args) {
    return User.findOne({ email: args.email })
  }
}

const postById = {
  type: PostType,
  description: 'Post by id',
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return Post.findById(args.id)
  }
}

const postsByUserId = {
  type: new GraphQLList(PostType),
  description: 'Posts by user ID',
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return Post.find({ user_id: args.id })
  }
}

const postsByUserName_WillItWork = {
  type: new GraphQLList(PostType),
  description: 'Posts by user ID',
  args: {
    username: { type: GraphQLString }
  },
  resolve(parent, args) {
    return Post.find({ user_id: userByUsername(username) })
  }
}

// for these... won't we also need to do a SECOND search to return a USER rather than a USER_ID???
const followers = {
  type: new GraphQLList(UserType),
  description: 'Followers of user',
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return Follow.find({ followed_id: args.id })
  }
}

const followedBy = {
  type: new GraphQLList(UserType),
  description: 'Users user is following',
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return Follow.find({ follower_id: args.id })
  }
}

module.exports = { users, userById, userByEmail, followedBy, followers, postsByUserName_WillItWork, postsByUserId, postById }