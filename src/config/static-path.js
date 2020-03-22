const { static } = require("express");
const { resolve: resolvePath } = require("path");

module.exports = {
  config(server, relativePath) {
    server.use("/files", static(resolvePath(__dirname, "..", ...relativePath)));
  }
};
