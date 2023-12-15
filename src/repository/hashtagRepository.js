const Hashtag = require('../models/hashtag');

class HashtagRepository {

    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async getAll(){
        try {
            const filter = {};
            const tags = await Hashtag.find(filter);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title: titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    // async getWithComments(id){
    //     try {
    //         const tweet = await Tweet.findOne(id);
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async destroy(id){
        try {
            const tag = await Hashtag.findByIdAndDelete(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    // async getAll(id){
    //     try {
    //         const tweet = await Tweet.create(data);
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

module.exports = HashtagRepository;