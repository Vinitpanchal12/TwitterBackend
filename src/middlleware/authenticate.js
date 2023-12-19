const passport = require('passport');

const authenticate = (req,res,next)=>{
    //console.log("insidemiddleware");
    passport.authenticate('jwt',(err, user)=>{
        // console.log(err, user);
        if(err) next(err);
        if(!user){
            return res.status(401).json({
                message:'unauthorised access no token'
            });
        }
        req.user = user;
        next();
    })(req,res,next);
}
module.exports = {authenticate};