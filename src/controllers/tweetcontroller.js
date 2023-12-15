const {TweetService} = require('../services/index');
const tweetService = new TweetService();

const  create =async (req, res)=>{
    try {
        const response = await  tweetService.create(req.body);
        return res.status(201).json({
            data: response,
            message: 'successfully created a tweet',
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'not able to  created a tweet',
            success: false,
            err: error
        });
    }
}

module.exports = {
    create
}