const CrudRepository = require('./crudRepository')
const User = require('../models/user')

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async findBy(data){
        try {
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            console.log('user repo error')
            throw error;
        }
    }
}
module.exports = UserRepository;