const express = require("express");
const path = require("node:path");

const app = express();

//set a single file (one get() for each file)
// app.get("/", (req, res) => {
//   // res.send("<h1>hello from express!!<h1/>");
//   res.sendFile(path.join(__dirname, "project", "index.html"));
// });

//set static folder
app.use(express.static(path.join(__dirname, "project")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
