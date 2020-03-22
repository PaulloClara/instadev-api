const Post = require("../models/post");

module.exports = {
  async index(request, response) {
    const posts = await Post.find().sort("-createAt");

    return response.status(200).json(posts);
  },

  async show(request, response) {},

  async store(request, response) {
    const { filename: image } = request.file;
    const { author, place, description, hashtag } = request.body;

    const post = await Post.create({
      author,
      place,
      description,
      hashtag,
      image
    });

    return response.status(200).json(post);
  },

  async update(request, response) {},

  async destroy(request, response) {}
};
