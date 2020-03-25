const Post = require("../models/post");

module.exports = {
  async index(request, response) {
    const posts = await Post.find().sort("-createdAt");

    return response.status(200).json(posts);
  },

  async show(request, response) {
    const { id: _id } = request.params;

    const post = await Post.findOne({ _id });

    return response.status(200).json(post);
  },

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

    request.socketIO.emit("post", post);

    return response.status(200).json(post);
  },

  async update(request, response) {},

  async updateLike(request, response) {
    const { id: _id } = request.params;

    const post = await Post.findOne({ _id });

    post.likes += 1;
    await post.save();

    request.socketIO.emit("like", post);

    return response.status(200).json(post);
  },

  async destroy(request, response) {
    const { id: _id } = request.params;

    const result = await Post.deleteOne({ _id });

    return response.status(200).json({ result: "OK" });
  }
};
