const sharp = require("sharp");
const { resolve: resolvePath } = require("path");
const { unlinkSync: removeFile } = require("fs");

module.exports = async (request, response, next) => {
  request.file.filename = `${request.file.filename.split(".")[0]}.jpg`;
  const { path, destination, filename: name } = request.file;

  await sharp(path)
    .resize(500)
    .jpeg({ quality: 70 })
    .toFile(resolvePath(destination, name));

  removeFile(path);

  return next();
};
