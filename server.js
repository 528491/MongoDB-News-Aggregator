var express = require("express");
var bodyParser = require("body-parser");

//Requiring routes because require('./routes')(app); is not working for some reason
var index = require('./routes/index.js')

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require('./routes')(app);
//Hacky solution, fix later
app.use('/', index);

/*

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  // no stacktraces leaked to user unless in development environment
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: (app.get('env') === 'development') ? err : {}
    })
  });

  */

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });