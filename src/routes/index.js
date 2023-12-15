const express = require('express');
const router = express.Router();

const TweetController = require('../controllers/tweetcontroller')

router.post('/tweet',TweetController.create );
// router.get();
 router.delete('/tweet/:id', TweetController.destroy);


module.exports = router; 