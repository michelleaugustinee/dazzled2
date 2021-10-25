const express = require('express');

const router = express.Router();

router.get('/signin', (req, res) => {
    res.render('pages/signin')
})

router.get('/register', (req, res) => {
    res.render('pages/register')
})

router.get('/logout', (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/');
})

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email == "ha@hi.com" && password == "123") {
        req.session.isLoggedIn = true;
        res.redirect('/');
    }
    else {
        res.render('pages/register')
    }
})

module.exports = router;