const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.users);

server.listen(5000);
