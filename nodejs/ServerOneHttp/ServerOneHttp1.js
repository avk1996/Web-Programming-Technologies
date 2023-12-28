const http = require("http");
let create_server = http.createServer(function (req, resp) {
  console.log("Recived request: " + req.url);
  resp.writeHeader(200, { "content-type": "texthtml" });
  if (req.url == "/base" && req.method == "GET") {
    resp.write("<h1>Home Page</h1>");
    resp.end("<h1>END</h1>");
  } else if (req.url == "/aboutus" && req.method == "GET") {
    resp.write("<h1>About us Page</h1>");
    resp.end("<h1>END</h1>");
  } else {
    resp.write("<h1>Do do stupid things</h1>");
    resp.end("<h1>END</h1>");
  }
});
create_server.listen(9090, function () {
  console.log("Server started at port 9090");
});
