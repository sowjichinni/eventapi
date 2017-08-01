'use strict';
module.exports = function(app) {
  var event = require('../controllers/todoListController');


  // todoList Routes
  app.route('/events')
    .get(event.list_all_events)
    .post(event.create_a_event);


  app.route('/events/createevent')
    .get(event.read_a_event)
    .delete(event.delete_a_event);
};
