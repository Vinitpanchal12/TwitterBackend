const CrudRepository = require('./crudRepository')
const Comment = require('../models/comment')

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }
}
module.exports = CommentRepository;