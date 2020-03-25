const multer = require("multer");
const { resolve: resolvePath } = require("path");

module.exports = multer({
  storage: multer.diskStorage({
    destination: resolvePath(__dirname, "..", "..", "uploads"),
    filename(request, file, callback) {
      const name = file.originalname.replace(/ /g, "_").toLowerCase();

      callback(null, name);
    }
  })
});
