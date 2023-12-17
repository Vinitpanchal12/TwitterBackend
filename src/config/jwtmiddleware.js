const JWT = require('passport-jwt')
const User  = require('../models/user')

const  ExtractJwt = JWT.ExtractJwt;
const JwtStrategy = JWT.Strategy;

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_secret'
}
const passportAuth=(passport)=>{
    passport.use(new JwtStrategy(opts,async (jwt_payload, done)=> {
        const user = await User.findOne(jwt_payload); 
            if (!user) {
                return done(null, false);
            } else {
                return done(null, user);
                // or you could create a new account
            }
        }
    ));
}
module.exports= passportAuth;
