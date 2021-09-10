var express = require('express');
var router = express.Router();
const phonenumbers = require('../telefonbuch.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(phonenumbers);
});

module.exports = router;
