const router = require("express").Router();
const PostController = require("./controllers/post");

router.get("/posts", PostController.index);
router.get("/posts/:id", PostController.show);
router.post("/posts", PostController.store);
router.put("/posts", PostController.update);
router.delete("/posts", PostController.destroy);

module.exports = {
  config(server) {
    server.use(router);
  }
};
