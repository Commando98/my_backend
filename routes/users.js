var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with an rresource');
});
router.get('/user', function(req, res, next) {
    res.send('Hello user');
});

module.exports = router;
