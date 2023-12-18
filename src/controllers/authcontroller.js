const UserService= require('../services/userservice');
const userService = new UserService();



const signup = async (req,res)=>{
    try {
        const response = await userService.signup(req.body);
        return res.status(201).json({
            data: response,
            message: 'created user ',
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'something wrong ',
            success: false,
            err: error
        });
    }
}

const login = async(req,res)=>{
    try {
        const user = await userService.getUserByEmail(req.body.email);
        if(!user){
            return res.status(401).json({
                message: 'no user found ',
                success: false,
            });
        }
        if(!user.comparePassword(req.body.password)){
            return res.status(401).json({
                message: 'wrong password found ',
                success: false,
            });
        }
        const token = user.genJWT();
        //console.log(token);
        return res.status(201).json({
            data: token,
            message: 'successfully logged in ',
            success: true,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'something wrong in ',
            success: false,
            err: error
        });
    }
}
module.exports = {
    signup, login
}
