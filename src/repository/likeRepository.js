const CrudRepository = require('./crudRepository')
const Like = require('../models/like')

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data){
        try {
            const response = await Like.findOne(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = LikeRepository;
