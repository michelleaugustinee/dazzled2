const express = require("express");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

//port
app.listen("3000", () => {
  console.log("Server sudah berjalan di port 3000");
});
