const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/signin", (req, res) => {
  res.render("pages/signin");
});

router.get("/signup", (req, res) => {
  res.render("pages/signup");
});

router.get("/logout", (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect("/");
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  data = await User.find();
  await data.forEach((account) => {
    if (email == account.email) {
      if (password == account.password) {
        req.session.isLoggedIn = true;
        res.redirect("/");
      } else {
        res.render("pages/signin", { error: "Wrong Password!" });
      }
    }
  });
});

router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  data = await User.find();
  await data.forEach((account) => {
    if (email == account.email) {
      res.render("pages/signup", { error: "Email sudah terdaftar" });
    }
  });

  const password = req.body.password;
  const password_ = req.body.password_;
  // minimal 8
  // minimal 1 huruf kapital
  if (password != password_) {
    res.render("pages/signup", { error: "Password tidak sama!" });
  } else {
    const user = new User({
      name: name,
      email: email,
      password: password,
    });
    await user.save((err, res) => {
      if (err) console.error(err);
      else {
        console.log("Sign In Succesfull!");
      }
    });
    req.session.isLoggedIn = true;
    res.redirect("/");
  }
});

module.exports = router;
