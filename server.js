const express = require('express');
const path = require('path')
const app = express();
var fs = require('fs')
var cors = require('cors')
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

var routes = require('./routes/routes.js')
var apiRoutes = require('./routes/api.js')

app.use('/', routes)
app.use('/api', apiRoutes)

if (app.get('env') === 'development') {
  app.use(logger('dev'));
} else {
  // create a write stream (in append mode)
  var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

  // setup the logger
  app.use(logger('combined', {stream: accessLogStream}))
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
})
