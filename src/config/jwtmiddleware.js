const JWT = require('passport-jwt')
const User  = require('../models/user')

const  ExtractJwt = JWT.ExtractJwt;
const JwtStrategy = JWT.Strategy;

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_secret'
}
const passportAuth=(passport)=>{
    try {
        passport.use(new JwtStrategy(opts,async (jwt_payload, done)=> {
            const user = await User.findById(jwt_payload.id);
                if (!user) {
                     done(null, false);
                } else {
                     done(null, user);
                    // or you could create a new account
                }
            }
        ));
    } catch (error) {
        throw error;
    }
}
module.exports= {passportAuth};
