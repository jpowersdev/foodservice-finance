var express = require('express');
var router = express.Router();
const { db, sendCount, sendRegister, insert } = require('../db')

router.get('/register/count', function(req, res) {
  console.log("GET /register/count")
  sendCount(req, res)
});

router.get('/register', function(req, res) {
  console.log("GET /register")
  sendRegister(req, res)
});

router.post('/register', (req, res) => {
  console.log('/POST /register')
  var collection = db.get('register');
  collection.insert(req.body)
    .catch((err) => {res.error(err);})
    .then((response) => { res.send(response) });
})

module.exports = router;
