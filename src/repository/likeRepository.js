const CrudRepository = require('./crudRepository')
const Like = require('../models/like')

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }
}
module.exports = LikeRepository;
