var express = require('express');
var router = express.Router();

// GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* GET Userlist page. */
router.get('/register', function(req, res) {
    var db = req.db;
    var collection = db.get('register');
    collection.find({},{},function(e,docs){
      if (e) {
        res.error(e);
      } else {
        res.send(docs);
      }
    });
});

router.post('/register', (req, res) => {
  var db = req.db;
  var collection = db.get('register');
  collection.insert(req.body)
    .catch((err) => {res.error(err);})
    .then((response) => { res.send(response) });
})

module.exports = router;
