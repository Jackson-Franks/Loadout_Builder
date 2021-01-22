const express = require('express');
const router = express.Router();
const db = require('../models')
const passport = require('../config/ppConfig.js')

router.get('/signup', (req, res) => {
    res.render('./auth/signup.ejs')
})

router.post('/signup', (req, res) => {
    // find or create a new user
    db.user.findOrCreate({
        where: {
            email: req.body.email
        },
        // if it doesnt find an existing user it will put where value and populate other fields
        defaults: {
            name: req.body.name,
            password: req.body.password
        }
    })
    .then(([user, wasCreated]) =>{
        if(wasCreated){
            console.log('nice')
            passport.authenticate('local',  {
                successRedirect: '/',
                sucessFlash: 'Account created and user logged in!'
            })(req, res)
            // res.send(`Created a new user profile for ${user.email}`)
        } else {
            req.flash(`Email already exists! Try logging in?`)
            res.redirect('/auth/login')
        }
    })
    .catch(err=>{
        req.flash('error', err.message)
        res.redirect('/auth/signup')
    })
})

router.get('/login', (req, res) => {
    res.render('./auth/login.ejs')
})

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/auth/login',
    successRedirect: '/',
    successFlash: 'You are now logged in!',
    failureFlash: 'Invalid email or password'
}))

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router