var express = require('express');
var router = express.Router();
const posts = require('../data/postData.json');

/* Get all posts. */
router.get('/', function(req, res, next) {
  const leanPosts = posts.map(post=> ({id: post.id, userId: post.userId, title: post.title, 
    content: post.content, datePosted: post.datePosted, upvoteCount: post.upvoteCount, 
    downvoteCount: post.downvoteCount}));
  res.status(200).json(leanPosts);
});

/* Get post details. */
router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === (id + ""));
  
  if(post === undefined){
    return res.status(404).send();
  }

  return res.status(200).json(post);
});


module.exports = router;
