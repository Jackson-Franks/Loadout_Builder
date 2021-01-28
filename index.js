const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')
require('dotenv').config()
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const flash = require('connect-flash')
const isLogIn = require('./middleware/isLogIn.js')

const app = express()

app.set('view engine', 'ejs')
// body parser middleware that allows us to use req.body
app.use(express.urlencoded({extended: false}))
app.use(ejsLayouts)

// session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// passport middleware (must go below session)
app.use(passport.initialize())
app.use(passport.session())

// flash middleware
app.use(flash())

// CUSTOM MIDDLEWARE
app.use((req, res, next) =>{
    // before every route, attch the flash messages and current user to res.locals
    res.locals.alerts = req.flash()
    res.locals.currentUser = req.user
    next() // move on to the next piece of middleware
})

// controller middleware
app.use('/auth', require('./controllers/auth.js'))


app.get('/', (req, res) => {
    db.guns.findAll({})
    .then((weapons) => {
        res.render('home', {weapons: weapons})

    })
})

app.get('/profile', isLogIn, (req, res) => {
    res.render('profile')
})

app.get('/class/:id', (req, res) => {
    db.attachments.findAll()
    .then(attachment => {
        res.render('class.ejs', {attachment: attachment})
    })
})

app.get('*', (req, res) => {
    res.render('404.ejs')
})

app.listen(process.env.PORT, ()=>{
    console.log(`auth app running on port ${process.env.PORT}`)
})