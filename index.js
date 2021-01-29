const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')
require('dotenv').config()
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const flash = require('connect-flash')
const isLogIn = require('./middleware/isLogIn.js')
const methodOverride = require('method-override')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
// body parser middleware that allows us to use req.body
app.use(express.urlencoded({extended: false}))
app.use(ejsLayouts)

app.use(methodOverride('_method'))

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
app.use(express.static(path.join(__dirname, 'public')))

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

app.get('/faves', (req, res) => {
    db.loadout.findAll()
    .then(fave => {
      res.render('faves.ejs', {fave})
    })
  })

app.get('/results/:id', isLogIn, (req, res) => {
   db.loadout.findOne({ where: {name: req.params.id}})
    .then(loadout => {
        loadout.getAttachments()
        .then(attachments => {
            res.render('results', {loadout, attachments})
        })
    })
})

  app.post('/faves', isLogIn, (req, res) => {
      console.log('nice', req.body.faveName, req.body.gun)
      db.loadout.findOrCreate({
          where: {
          name: req.body.faveName,
          type: req.body.gun,
          userId: req.user.id
          }
      }).then(([loadout, wasCreated]) => {
          req.body.attachments.forEach(newAttachment => {
              db.attachments.findOne({
                  where: {name: newAttachment}
              }).then(attachment => {
                 console.log(attachment)
                 loadout.addAttachments(attachment)
                })
            })
            res.redirect('/faves')
      })
    
  })

  app.put('/faves/:idx', (req, res) => {
      db.attachments = req.body.attachments
      res.redirect('faves')
  })

  app.get('/faves/edit/:idx', isLogIn, (req, res) => {
    db.loadout.findOne({ where: {name: req.params.id}})
    .then(loadout => {
        loadout.getAttachments()
        .then(attachments => {
      res.render('edit', {loadout, attachments})
  })
})
})

  app.post('/results/:id', isLogIn, (req, res) => {
    db.loadouts_attachments.findOrCreate({
        where: {
            loadoutId: req.body.gun,
            attachmentId: req.body.attachments
        }
    }).then(faveLoadout => {
        res.redirect('results.ejs')
    })
  })

  app.delete('/faves/:name', isLogIn, (req,res) => {
      db.loadout.destroy({
          where: {
            name: req.body.name,
            type: req.body.type,
            userId: req.user.id
          }
      }).then(classDeleted => {
          res.redirect('/faves')
          msg: 'Class deleted'
      })
  })



app.get('/class/:id', (req, res) => {
    db.attachments.findAll()
    .then(attachment => {
        res.render('class.ejs', {attachment: attachment, gun:req.params.id})
    })
})

app.get('*', (req, res) => {
    res.render('404.ejs')
})

app.listen(process.env.PORT, ()=>{
    console.log(`auth app running on port ${process.env.PORT}`)
})