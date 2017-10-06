var mongo = require('mongodb');
var monk = require('monk');

var db = monk('localhost:27017/register');
var register = db.get('register');

function getCount () {
  return register.count()
}

function sendCount (req, res) {
  register.count({},{},function(e, count){
    if (e) {
      res.error(e);
    } else {
      res.json({ count: count });
    }
  });
}

function sendRegister (req, res) {
  register.find({},{ /*sort: {'Date': -1}*/ },function(e,docs){
    if (e) {
      res.error(e);
    } else {
      res.send(docs);
    }
  });
}

function insert (data) {
  register
    .insert(data)
    .catch(err => err)
    .then(response => response)
}

module.exports = { db, getCount, insert, sendCount, sendRegister };
