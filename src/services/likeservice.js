const {LikeRepository,TweetRepository} = require('../repository/index')

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
    }

    async toggleLike(){
        
    }
}