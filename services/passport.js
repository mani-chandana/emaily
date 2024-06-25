const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users');
//creates new instance of googleStrategy
//send configuration in the parameters
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        //before saving we need to check if the user is already exists
        //this will return a promise
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (!existingUser) {
                    new User({ googleId: profile.id }).save()
                        .then((user) => done(null, user));
                    //this newly created user is the arg for serialiseUser function
                }
                else {
                    // null means no errors
                    done(null, existingUser);
                    // existing user is the user argument in serialiseUser function
                }
            })
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
    //user.id automatically created by mongoose when we create entry to DB
});

passport.deserializeUser((id, done) => {
    // this id is the one that is in serialiseUser
    User.findById(id)
        .then((user) => {
            done(null, user);
        });
});

