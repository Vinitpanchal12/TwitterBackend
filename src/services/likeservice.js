const {LikeRepository,TweetRepository} = require('../repository/index')

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){
        if(modelType == 'Tweet'){

        }else if(modelType =='Comment'){

        }else{
            console.log(error);
        }
    }
}
module.exports = LikeService;