const { Schema, model } = require("mongoose");

const PostSchema = Schema(
  {
    author: String,
    place: String,
    hashtag: String,
    description: String,
    image: {
      url: String,
      name: String,
      size: Number,
      extension: String
    },
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
