const router = require("express").Router();

const PostController = require("./controllers/post");

const SaveIMGMiddleware = require("./middleware/save-img");
const ResizeIMGMiddleware = require("./middleware/resize-img");

router.get("/posts", PostController.index);
router.get("/posts/:id", PostController.show);
router.post(
  "/posts",
  SaveIMGMiddleware.single("image"),
  ResizeIMGMiddleware,
  PostController.store
);
router.put("/posts/:id", PostController.update);
router.delete("/posts/:id", PostController.destroy);
router.put("/posts/:id/likes", PostController.updateLike);

module.exports = {
  config(server) {
    server.use(router);
  }
};
