const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, PostType, FollowType } = require('./types')
const { User, Post, Follow } = require('../models')
const { query } = require('express')

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
  description: 'Query user by username',
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
  type: GraphQLList(PostType),
  description: 'Posts by user ID',
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return Post.find({ user_id: args.id })
  }
}

const postsByUserName_WillItWork = {
  type: GraphQLList(PostType),
  description: 'Posts by user ID',
  args: {
    username: { type: GraphQLString }
  },
  resolve(parent, args) {
    return Post.find({ user_id: userByUsername({ username }) })
  }
}

const followers = {
  type: GraphQLList(UserType),
  description: 'Followers of user',
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return User.find({ followed_id: args.id })
  }
}

const followedBy = {
  type: GraphQLList(UserType),
  description: 'Users user is following',
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return User.find({ follower_id: args.id })
  }
}

