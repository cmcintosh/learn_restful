var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Tododb');

  app.use(bodyParser.urlencoded({ extended: true } ));
  app.use(bodyParser.json());

  var routes = require('./api/routes/todoListRoutes');
  routes(app);


  if (app) {
    app.listen(port);
    console.log('Initialized API on port: ' + port);
  }
  else {
    console.log('Server not initialized');
  }
