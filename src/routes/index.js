const express = require('express');
const router = express.Router();

const TweetController = require('../controllers/tweetcontroller')
const LikeController = require('../controllers/likecontroller')
const UserController  = require('../controllers/usercontroller')

router.post('/tweet',TweetController.create );
router.get('/tweets',TweetController.getAll);
router.get('/tweet/:id',TweetController.get);
router.delete('/tweet/:id', TweetController.destroy);

router.post('/likes/toggle',LikeController.toggleLike);

router.post('/user',UserController.createUser);


module.exports = router; 