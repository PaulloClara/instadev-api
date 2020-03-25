const router = require("express").Router();

const PostController = require("./controllers/post");

const UploadMiddleware = require("./middleware/upload");
const ResizeMiddleware = require("./middleware/resize");

router.get("/posts", PostController.index);
router.get("/posts/:id", PostController.show);
router.post(
  "/posts",
  UploadMiddleware.single("image"),
  ResizeMiddleware,
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
