const {TweetRepository,HashtagRepository} = require('../repository/index')

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        try {
            const content = data.content;
            let tags = content.match(/#[a-zA-Z0-9_]+/g)
                            .map((tag)=> tag.substring(1).toLowerCase());
            const tweet  = await this.tweetRepository.create(data);
            let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
            let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
            let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
            newTags = newTags.map(tag => {
                return { title : tag , tweets : [tweet.id]}
            });
            const response = await this.hashtagRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach((tag) =>{
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        } catch (error) {
            console.log('error at service')
        }
    }
}

module.exports = TweetService