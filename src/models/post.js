const { Schema, model } = require("mongoose");

const PostSchema = Schema(
  {
    author: String,
    place: String,
    description: String,
    hashtag: String,
    image: String,
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Post", PostSchema);
