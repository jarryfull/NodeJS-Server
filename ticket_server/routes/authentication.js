const express = require('express');
const router  = express.Router();
const passport = require('passport');

router.route('/singup')
    .get( (req, res ) => {
        //res.json({ 
        //    code: 200,
        //    msg: "Getting SingUp Page."
        //});
        console.log("Reciviendo datos");    
        console.log( req.body );
        passport.authenticate('local.singup', {
            successRedirect: '/profile',
            failureRedirect: '/singup',
            failureFlash: true
        });
        res.json("Datos Recividos");
    })
    .post( ( req, res ) => {
        console.log("Retreiving data");
        
        // Fix found in:
        // https://stackoverflow.com/questions/47140332/passport-authenticate-callback-not-being-executed
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                console.log('1');
                return res.status(401).json(err);
            }
            if (user) {
                console.log('2');
                const token = user.generateJwt();
                return res.status(200).json({
                    "token": token
                });
            } else {
                console.log('3');
                res.status(401).json(info);
            }
        })(req, res);

        //passport.authenticate('local', {
        //    successRedirect: '/profile',
        //    failureRedirect: '/singup',
        //    failureFlash: true
        //});

    });

router.route('/profile')
    .get( (req, res ) => {
        res.json({ 
            code: 200,
            msg: "User Authenticated Successfully."
        });
    })
    //.post( ( req, res ) => {
    //    console.log("Reciviendo datos");
    //    console.log(req.body);
    //    passport.authenticate('local.singup', {
    //        successRedirect: '/profile'
    //    });
    //    res.json("Datos Recividos");
    //});
module.exports = router;