var express = require("express");

const https = require("https"),
  fs = require("fs");

const options = {
  key: fs.readFileSync("/home/awrnnd/server/encryption/server.key"),
  cert: fs.readFileSync("/home/awrnnd/server/encryption/alecrichardson.me.crt"),
  ca: fs.readFileSync("/home/awrnnd/server/encryption/intermediate.crt")
};

const app = express();
app.use(express.json());
app.use(express.static("client/build"));

app.listen(6000, () => console.log("server running"));

https
  .createServer(options, app)
  .listen(6060, () => console.log("frontend running"));
