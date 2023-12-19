const express = require('express');
const router = express.Router();

const TweetController = require('../controllers/tweetcontroller')
const LikeController = require('../controllers/likecontroller')
const AuthController  = require('../controllers/authcontroller')
const CommentController = require('../controllers/commentcontroller')
const {authenticate} = require('../middlleware/authenticate')

router.post('/signup',AuthController.signup);
router.post('/login',AuthController.login);

router.post('/comment',CommentController.createComment);

router.post('/tweet',authenticate,TweetController.create );
router.get('/tweets',TweetController.getAll);
router.get('/tweet/:id',TweetController.get);
router.delete('/tweet/:id', TweetController.destroy);

router.post('/likes/toggle',LikeController.toggleLike);
router.post('/likes',LikeController.like);






module.exports = router; 