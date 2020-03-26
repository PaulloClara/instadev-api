const sharp = require("sharp");
const { resolve: resolvePath } = require("path");
const { unlinkSync: removeFile, createReadStream: readFile } = require("fs");

module.exports = async (request, response, next) => {
  const { path, destination } = request.file;
  const name = `${request.file.filename.split(".")[0]}.jpg`;

  const { size } = await sharp(path)
    .resize(500)
    .jpeg({ quality: 70 })
    .toFile(resolvePath(destination, name));

  removeFile(path);
  request.file.size = size;
  request.file.filename = name;
  request.file.path = `${request.file.path.split(".")[0]}.jpg`;

  request.file.buffer = readFile(resolvePath(destination, name));

  return next();
};
