const {TweetRepository,HashtagRepository} = require('../repository/index')

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        try {
            const content = data.content;
            // let tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=> tag.substring(1).toLowerCase()); 
            const tagsMatch = content.match(/#[a-zA-Z0-9_]+/g);
            const tags = tagsMatch ? tagsMatch.map((tag) => tag.substring(1).toLowerCase()) : [];            
            const tweet  = await this.tweetRepository.create(data);
            let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
            let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
            let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
            newTags = newTags.map(tag => {
                return { title : tag , tweets : [tweet.id]}
            });
            await this.hashtagRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach(async (tag) =>{
                tag.tweets.push(tweet.id);
                await tag.save();
            });
            return tweet;
        } catch (error) {
            console.error("Error creating tweet:", error);
            // Handle error or return a default value
            return null;
        }
    }

    async destroy(id){
        try {
            const response = this.tweetRepository.destroy(id);
            let allTags = await this.hashtagRepository.getAll();
            const presentTags = allTags.filter(tag => tag.tweets.includes(id));
            presentTags.forEach((tag) =>{
                tag.tweets.pop(presentTags.id);
                tag.save();
            });
            return response;
        } catch (error) {
            console.log(error); 
        }
    }

    async getAll(){
        try {
            const response = await this.tweetRepository.getAll();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const response = await this.tweetRepository.get(id);
            return response;
        } catch (error) {
            
            console.log(error);
        }
    }
}

module.exports = TweetService