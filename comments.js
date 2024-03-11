var express = require('express');
var router = express.Router();
const comments = require('../data/commentData.json');

/* Get all comments. */
router.get('/', function(req, res, next) {
  const leancomments = comments.map(comment=> ({id: comment.id, userId: comment.userId, postId: comment.postId, content: comment.content }));
  res.status(200).json(leancomments);
});

/* Get comment details. */
router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === (id + ""));
  
  if(comment === undefined){
    return res.status(404).send();
  }

  return res.status(200).json(comment);
});



module.exports = router;
