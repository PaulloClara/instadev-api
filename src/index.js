require("dotenv").config();
require("./services/mongo").config();

const express = require("express");

const serverExpress = express();
serverExpress.use(express.json());

const { serverHTTP } = require("./config/socket-io").config(serverExpress);

require("./config/cors").config(serverExpress);
require("./config/static-path").config(serverExpress, ["..", "uploads"]);

require("./routes").config(serverExpress);

const port = process.env.PORT || 3000;

serverHTTP.listen(port, _ => {
  console.log(`\n\tServer running on localhost:${port}\n`);
});
