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

const  destroy =async (req, res)=>{
    try {
        const response = await  tweetService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            message: 'successfully deleted a tweet',
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'not able to  delete a tweet',
            success: false,
            err: error
        });
    }
}

const  getAll =async (req, res)=>{
    try {
        const response = await  tweetService.getAll();
        return res.status(201).json({
            data: response,
            message: 'successfully fetched all tweets',
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'not able to  fetch all  tweets',
            success: false,
            err: error
        });
    }
}

const  get =async (req, res)=>{
    try {
        const response = await  tweetService.get(req.params.id);
        return res.status(201).json({
            data: response,
            message: 'successfully fetched a tweet',
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'not able to  fetch a tweet',
            success: false,
            err: error
        });
    }
}
module.exports = {
    create,
    destroy,
    getAll,
    get
}