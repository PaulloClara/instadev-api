const router = require("express").Router();
const multer = require("multer")(require("./configs/upload"));

const PostController = require("./controllers/post");

router.get("/posts", PostController.index);
router.get("/posts/:id", PostController.show);
router.post("/posts", multer.single("image"), PostController.store);
router.put("/posts", PostController.update);
router.put("/posts/:id/likes", PostController.updateLike);
router.delete("/posts", PostController.destroy);

module.exports = {
  config(server) {
    server.use(router);
  }
};
