const CrudRepository = require('./crudRepository')
const User = require('../models/user')

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}
module.exports = UserRepository;