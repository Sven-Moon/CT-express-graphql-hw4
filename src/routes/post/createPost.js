const axios = require('axios')
const e = require('express')

module.exports = async (req, res) => {
  const newPost = req.body

  const postData = {
    user_id: req.verifiedUser.user._id,
    title: newPost['postTitle'],
    body: newPost['postBody'],
  }

  const mutation = `
        mutation createPost($user_id: String!, $title: String!, $body: String!) { 
            createPost( user_id: $user_id, title: $title, body: $body)
        }`

  try {
    const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
      {
        query: mutation,
        variables: postData
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });
    console.log(data)
  } catch (e) {
    console.log('post errors:', e.response.data.errors)
  }

  res.redirect(`/`)
}