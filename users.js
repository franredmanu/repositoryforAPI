var express = require('express');
var router = express.Router();
const users = require('../data/userData.json');

/* Get all users. */
router.get('/', function(req, res, next) {
  const leanusers = users.map(user=> ({id: user.id, userName: user.userName, title: user.title, 
    content: user.content}));
  res.status(200).json(leanusers);
});

/* Get user details. */
router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === (id + ""));
  
  if(user === undefined){
    return res.status(404).send();
  }

  return res.status(200).json(user);
});



module.exports = router;
