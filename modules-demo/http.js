const http = require("node:http");

//create server obj
http
  .createServer((rq, res) => {
    //write response
    res.write("hello world");
    res.end();
  })
  .listen(5000, () => console.log("server running..."));
