const {UserRepository} = require('../repository/index');

class UserService{
    constructor(){
        this.userRepository= new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async getUserByEmail(email){
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            console.log('user service error')
            throw error;
        }
    }

    async signin(data){
        try {
            const user = await this.getUserByEmail(data.email);
            if(!user){
                throw ({
                    message: 'no user found '
                });
            }
            if(!user.comparePassword(data.password)){
                throw ({
                    message: 'wrong password found '
                });
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;