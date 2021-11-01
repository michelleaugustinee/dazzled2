const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "som3_s3cret_keys",
    cookie: {},
  })
);

app.use(function (req, res, next) {
  res.locals.isLoggedIn = req.session.isLoggedIn;
  next();
});

mongoose.connect(
  "mongodb+srv://michelleaugustinee:Vr9v8tWsOTIq8nz9@cluster0.n4cu2.mongodb.net/dazzled?retryWrites=true&w=majority",
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Database terhubung!");
    }
  }
);

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen("3000", () => {
  console.log("Server sudah berjalan");
  //console.log(__dirname)
});
