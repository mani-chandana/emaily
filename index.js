const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//tell express to make use of cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // says max how many days this should be live
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

if(process.env.NODE_ENV === "production") {
    // Express will serve up production assests
    //like our main.js file, main.css file!
// if we get any get request to our application and if don't understand what it mean
// load into client/build to look if there is any matching rout
    app.use(express.static('client/build'))
    //Express will serve up the index.html file 
    // if it doesn't recognize the route

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
