const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'som3_s3cret_k3ys',
    cookie: {}
}))

app.use( (req, res, next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn;
    next();
})

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen('3000', ()=> {
    console.log('Server sudah berjalan di port 3000')
})