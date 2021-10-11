const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/pages/index.html");
});

//port
app.listen("3000", () => {
  console.log("Server sudah berjalan di port 3000");
  console.log(__dirname);
});
