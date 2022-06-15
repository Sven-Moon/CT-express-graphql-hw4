const mongoose = require("mongoose")

const followSchema = new mongoose.Schema(
  {
    follower_id: {
      type: String,
      required: true,
    },
    followed_id: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("follow", followSchema)