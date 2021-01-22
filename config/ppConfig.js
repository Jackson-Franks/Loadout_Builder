const passport = require('passport')
const db = require('../models')
const LocalStrategy = require('passport-local')

// SERIALIZATION SET UP
// --------------------------------------------------------------
// tell passport how to serialise and deserialise 
// (converting our user object to something thats easy to store)
// keep track of what user is logged in by their id

passport.serializeUser((user, doneCallback) => {
    console.log('serialize the user....')
    doneCallback(null, user.id)
})

// tells passport how to deserialize the user now by looking it up in the database id (which is stored in the session)
passport.deserializeUser((id, doneCallback)=>{
    db.user.findByPk(id)
    .then(foundUser=>{
        console.log('deserializing user...')
        doneCallback(null, foundUser)
    })
    .catch(err=> {
        console.log('ERROR deserializing user')
    })
})

// STRATEGY SET UP
// ---------------------------------------------------------------

const findAndLogInUser = (email, password, doneCallback) =>{
    // tell passport how to tell that our user is legit
    db.user.findOne({where: {email: email}})
    .then(async foundUser =>{
        let match
        if(foundUser) {
            // check that the password is legit
            match = await foundUser.validPassword(password)
        }
        if(!foundUser || !match) { // something weird about user
            console.log('password was not validated ie match is false')
            return doneCallback(null, false)
        } else { // user was legit
            return doneCallback(null, foundUser)
        }
    })
    .catch(err=>doneCallback(err))
}

// think of doneCallback as a function that looks like this:
// login(error, userToBeLoggedIn){
    // do stuff
// }
// we provide 'null' if theres no error, or 'false' if theres no user or if the password is invalid (like they did in the passport-local docs)

const fieldsToCheck = {
    usernameField: 'email',
    passwordField: 'password'
}

// create an instance of local strategy 
// constructor argument 1: object that indicates how were going to refer to the two fields were checking (for ex. were using email instead of username)
// constructor argumernt 2: a callback that is ready to recieve the two fields were checking as well as a  doneCallback

const strategy = new LocalStrategy(fieldsToCheck, findAndLogInUser)

passport.use(strategy)



module.exports = passport