const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index');
})

router.get('/faq', (req, res) => {
    res.render('pages/faq');
})

router.get('/allproducts', (req, res) => {
    res.render('pages/allproducts')
})

router.get('/hto', (req, res) => {
    res.render('pages/hto');
})

module.exports = router;
