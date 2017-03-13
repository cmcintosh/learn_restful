module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // Create the routes
  app.route('/tasks')
    .get(todoList.index)
    .post(todoList.insert);

  app.route('/tasks/:taskId')
    .get(todoList.get)
    .put(todoList.update)
    .delete(todoList.delete)
}
