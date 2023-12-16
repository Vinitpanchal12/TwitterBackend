const {LikeRepository,TweetRepository} = require('../repository/index')

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){
        //console.log(modelId);  
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.get(modelId);
        }else if(modelType =='Comment'){
        //todo
        }else{
            console.log(error);
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user : userId,
            likeable:modelId,
            onModel:modelType
        });

        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isAdded = false;
        }else{
            const newLike = await this.likeRepository.findByUserAndLikeable({
                user : userId,
                likeable:modelId,
                onModel:modelType
            });   
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}
module.exports = LikeService;