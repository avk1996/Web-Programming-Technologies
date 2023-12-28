const http = require("http");
let create_server = http.createServer(function (req, resp) {
  console.log(`Recived request ${req.url} Method:  ${req.method}`);
  resp.writeHeader(200, { "content-type": "text/html" });
  resp.write("<h1> Hello Abhishek I am Node</h1>");
  resp.write("<h1> And welcome Rushikesh I am Node</h1>");
  //   resp.end("<h1>END IS THE BEGINNING</h1>"); //end is necessary to write to document
});
create_server.listen(9090, function () {
  console.log("Server running at port 9090"); //for our understanding
});
