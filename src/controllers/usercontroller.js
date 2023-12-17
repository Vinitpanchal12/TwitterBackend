const UserService= require('../services/userservice');
const userService = new UserService();


const createUser = async (req,res)=>{
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
module.exports = {
    createUser
}
