const {LikeService} =require('../services/index')
const likeService = new LikeService();

const  toggleLike =async (req, res)=>{
    try {
        const response = await likeService.toggleLike(req.query.modelId,
            req.query.modelType,req.body.userId);
        return res.status(201).json({
            data: response,
            message: 'successfully toggle',
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'something wrong in controller',
            success: false,
            err: error
        });
    }
}

const like =async (req, res)=>{
    try {
        const response = await likeService.createLike({
            user: req.body.userId,
            onModel: req.body.onModel,
            likeable: req.body.likeable
        });
        return res.status(201).json({
            data: response,
            message: 'successfully liked or unliked',
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: 'something wrong in controller',
            success: false,
            err: {error}
        });
    }
}

module.exports = {
    toggleLike,
    like    
}