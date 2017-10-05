var express = require('express');
var router = express.Router();

// GET users listing. */
router.get('/hello', function(req, res) {
  res.send("Hello")
});

module.exports = router;
