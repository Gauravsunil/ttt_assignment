const express = require("express");
const http = require("http");
const userRouter = require("./routes/userRouter");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const hostname = "localhost";
const port = 5000;
const path = require("path");
const app = express();
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use(bodyParser.json());

//----------------------------------------------------------------------------

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build"));
});

app.use((req, res, next) => {
  // console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>THIS IS EXPRESS SERVER</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
