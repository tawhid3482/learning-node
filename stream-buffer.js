const http = require("http");

const fs = require("fs");

// create a server using by row node.js
const server = http.createServer();

// listener
server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");

  const readAble = fs.createReadStream(process.cwd() + "/texts/read.txt");

  readAble.on("data", (buffer) => {
    res.statusCode = 200
    res.write(buffer);
  });
  readAble.on("end", () => {
    res.statusCode = 200
    res.end("hello world");
  });

  readAble.on("error", (error) => {
    console.log(error)
    res.statusCode = 200
    res.end("something went wrong");
  });
});

server.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});
