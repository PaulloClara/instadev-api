module.exports = {
  config(serverExpress) {
    const serverHTTP = require("http").Server(serverExpress);
    const socketIO = require("socket.io")(serverHTTP);

    serverExpress.use((request, response, next) => {
      request.socketIO = socketIO;

      return next();
    });

    return { serverHTTP, socketIO };
  }
};
