const CommentService = require('../services/commentservice')
const commentService = new CommentService();

const createComment =async (req, res)=>{
    try {
        const response = await commentService.create(req.query.modelId,
            req.query.modelType,req.body.userId, req.body.content);
        return res.status(201).json({
            data: response,
            message: 'successfully commented',
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
module.exports={
    createComment
}