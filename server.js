var express = require('express'),
  app = express(),
  port = process.env.PORT || 8090,
  mongoose = require('mongoose'),
  Event = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/event'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
