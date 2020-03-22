const multer = require("multer");
const { resolve: resolvePath } = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: resolvePath(__dirname, "..", "..", "uploads"),
    filename(request, file, callback) {
      callback(null, file.originalname);
    }
  })
};
