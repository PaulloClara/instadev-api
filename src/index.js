require("dotenv").config();
require("./services/mongo").config();

const server = require("express")();

require("./config/cors").config(server);
require("./config/static-path").config(server, ["..", "uploads"]);

require("./routes").config(server);

const port = 3000;

server.listen(port, _ => {
  console.log(`\n\tServer running on localhost:${port}\n`);
});
