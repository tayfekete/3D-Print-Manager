var express = require('express');
var router = express.Router();

//Login
router.get('/', function(req, res, next) {
  res.redirect('login');
});
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

module.exports = router;
