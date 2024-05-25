const http = require("node:http");

const server = http.createServer(() => {});

server.listen(8080, () => {
  console.log("Server is running on 127.0.0.1:8080");
});
