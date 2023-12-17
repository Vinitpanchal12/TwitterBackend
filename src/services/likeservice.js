const {LikeRepository,TweetRepository, CommentRepository} = require('../repository/index')

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
        this.commentRepository= new CommentRepository();
    }

    async toggleLike(modelId, modelType, userId){
        //console.log(modelId);  
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.find(modelId); 
        }else if(modelType =='Comment'){
        //todo
        //    var likeable = await this.commentRepository.get(modelId);
        }else{
            console.log("something wrong at  service");
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user : userId,
            likeable:modelId,
            onModel:modelType
        });

        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();
            var isAdded = false;
        }else{
            const newLike = await this.likeRepository.create({
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

    async createLike(data){
        try {
            const result = await this.likeRepository.create(data);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = LikeService;