const express = require('express');
const router = express.Router();

const TweetController = require('../controllers/tweetcontroller')

router.post('/tweet',TweetController.create );
router.get('/tweets',TweetController.getAll);
router.get('/tweet/:id',TweetController.get);
router.delete('/tweet/:id', TweetController.destroy);


module.exports = router; 