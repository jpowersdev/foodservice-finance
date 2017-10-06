const fs = require('fs')
const { insert, getCount } = require('./db')
var csv = require('csv-parser')
var path = require('path')
var chokidar = require('chokidar');

var watcher = chokidar.watch('./data/files', {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

function readFile (filename) {
  var register = []

  fs.createReadStream(path.join(__dirname, filename))
    .pipe(csv({
      headers: [
        'Account', 'Flag', 'Date', 'Payee', 'GroupAndCategory', 'Group',
        'Category', 'Memo', 'Outflow', 'Inflow', 'Cleared'
      ]
    }))
    .on('error', function(err) {
      console.log(err)
    })
    .on('data', function (data) {
      if (data.Group != 'Category Group'){
        register.push(data)
      }
    })
    .on('end', function () {
      var rCount = register.length
      getCount()
        .then((count) => {
          console.log("Register Length: " + rCount)
          console.log("Database Length: " + count)
          if (rCount > count) {
            insert(register.slice(0, (rCount - count)))
            .then((res) => {
              console.log(res)
            })
          }
        })
        .catch(err => console.log)
      });
}

var log = console.log.bind(console);

watcher
  .on('add', path => readFile(path))
  .on('change', path => readFile(path))
  .on('unlink', path => log(`File ${path} has been removed`))
  .on('addDir', path => log(`Directory ${path} has been added`))
  .on('unlinkDir', path => log(`Directory ${path} has been removed`))
  .on('error', error => log(`Watcher error: ${error}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'));

console.log("Watching for new files")