const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "project", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "project", "about.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Carlos", age: 24 },
  //     { name: "Amalia", age: 25 },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  //build path
  let filePath = path.join(
    __dirname,
    "project",
    req.url === "/" ? "index.html" : req.url + ".html"
  );
  console.log(filePath);
  //extension of file
  let extName = path.extname(filePath);
  // initial content type
  let contentType = "text/html";

  // check ext and set content type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/jpg";
      break;
  }

  //readFile
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //Page not found
        fs.readFile(
          path.join(__dirname, "project", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        //some server error
        res.writeHead(500);
        res.end(`<h1>Server Error ${err.code}<h1/>`);
      }
    } else {
      //succes
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const Port = process.env.Port || 5000;

server.listen(Port, () => console.log(`Server running on ${Port}`));
