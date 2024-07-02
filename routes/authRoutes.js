const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    // whenever someone says to authenticate with string google passport will 
    //execute code of new GoogleStrategy because it has internal identifier as google
    // second aurgument is options with scope inside it

    //passport.authenticate is middelware finishes up with sign in with google
    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) =>{
            res.redirec('/surveys');
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })
}
