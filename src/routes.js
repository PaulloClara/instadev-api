const router = require("express").Router();

router.get("/", (request, response) => {
  response.send({ message: "hello world" });
});

module.exports = {
  config(server) {
    server.use(router);
  }
};
