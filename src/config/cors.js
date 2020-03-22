const cors = require("cors");

module.exports = {
  config(server) {
    server.use(cors());
  }
};
