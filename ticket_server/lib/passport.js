const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.use( 'local', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback: true
}, async ( req, username, password, done ) => {
    console.log( 'Trying to singup.' );
    console.log( req.body );
    const newUSer = {
        username,
        password,
    };
    
}));

//passport.serializeUser( ( usr, done ) => {
//    
//} );