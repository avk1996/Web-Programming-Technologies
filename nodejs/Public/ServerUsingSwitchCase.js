const http = require("http");
const fs = require("fs");

let create_server = http.createServer(function (req, resp) {
  resp.writeHeader(200, { "content-type": "texthtml" });
  if (req.method == "GET") {
    switch (req.url) {
      case "/home":
        resp.write("<h1>Home Page</h1>");
        resp.end("<h1>END</h1>");
        break;
      case "/base":
        resp.write("<h1>Base Page</h1>");
        resp.end("<h1>END</h1>");
        break;
      case "/danger":
        resp.write("<h1>Danger Page</h1>");
        resp.end("<h1>END</h1>");
        break;
      case "/watery":
        resp.write("<h1>watery Page</h1>");
        resp.end("<h1>END</h1>");
        break;
      case "/form":
        let readStream = fs.createReadStream("Hello.html");
        readStream.pipe(resp);
        readStream.error("error", function () {});
        break;
      default:
        resp.write(
          "<h1>Go back to : <a href='http://localhost:9090/home>Home</a></h1>"
        );
        resp.write(
          "<h1>Go back to : <a href='http://localhost:9090/base>Base</a></h1>"
        );
        resp.write(
          "<h1>Go back to : <a href='http://localhost:9090/danger>Danger</a></h1>"
        );
        resp.write(
          "<h1>Go back to : <a href='http://localhost:9090/watery>Watery</a></h1>"
        );
        resp.end("<h1>END</h1>");
        break;
    }
  }
});
create_server.listen(9090, function () {
  console.log("Server started listening 9090");
});
