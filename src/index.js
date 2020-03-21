const express = require("express");

const server = express();

const port = 3000;

server.listen(port, _ => {
  console.log(`\n\tServer running on localhost:${port}\n`);
});
