const { GraphQLObjectType, GraphQLInputObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean, GraphQLFloat } = require('graphql')


const { User, Post } = require('../models')
const postModel = require('../models/post.model')

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User type',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    posts: {
      type: GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find({ user_id: parent.id })
      }
    },
    following: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        return Follow.find({ follower_id: parent.id })
      }
    },
    followed_by: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        return Follow.find({ followed_by: parent.id })
      }
    }
  })
})

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: "Post type",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    user_id: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.user_id)
      }
    }
  })
})

const FollowType = new GraphQLObjectType({
  name: 'Follow',
  description: "Follow type",
  fields: () => ({
    follower_id: { type: String },
    followed_id: { type: String }
  })
})