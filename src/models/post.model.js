const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true
    },
    user_id: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("post", postSchema)