const {CommentRepository,TweetRepository} = require('../repository/index')

class CommentService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
    }

    async create(modelId, modelType, userId,content){
        if(modelType == 'Tweet'){
            var commentable = await this.tweetRepository.get(modelId); 
        }else if(modelType =='Comment'){
            var commentable = await this.commentRepository.get(modelId); 
        }else{
            console.log("something wrong at  service");
        }
        const comment = await this.commentRepository.create({
            content: content,
            userId : userId,
            commentable:modelId,
            onModel:modelType,
            comments:[]  
        });
        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}
module.exports = CommentService;