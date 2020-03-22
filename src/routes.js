const router = require("express").Router();

const PostController = require("./controllers/post");
const UploadMiddleware = require("./middleware/upload");

router.get("/posts", PostController.index);
router.get("/posts/:id", PostController.show);
router.post("/posts", UploadMiddleware.single("image"), PostController.store);
router.put("/posts", PostController.update);
router.put("/posts/:id/likes", PostController.updateLike);
router.delete("/posts", PostController.destroy);

module.exports = {
  config(server) {
    server.use(router);
  }
};
