const http = require("http");

const server = http.createServer(() => {
  console.log("Server Listening on Port 3000");
});

server.listen(3000);
