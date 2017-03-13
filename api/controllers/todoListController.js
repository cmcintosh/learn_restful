'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

// Returns all tasks
exports.index = function(req, res) {
  console.log('Recieved Index Request');
  Task.find({}, function(err, task){

    if (err) { res.send(err); }
    else { res.json(task); }


  });
}

// Inserts a task.
exports.insert = function(req, res) {
  console.log('Recieved Insert Request');
  console.log(req.body);
  var task = new Task(req.body);
  task.save(function(err, task) {
    if (err) { res.send(err); }
    else { res.json(task); }
  });
}

// Gets a task
exports.get = function(req, res) {
  console.log('Recieved Get Request');
  console.log(req.params);
  Task.findById(req.params.taskId, function(err, task) {
    if (err) { res.send(err); }
    else { res.json(task); }
  })
}

// Updates a task.
exports.update = function(req, res) {
  console.log('Recieved Update Request');
  console.log(req.params);
  Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task){
    if (err) { res.send(err); }
    else { res.json(task); }
  });
}

// Deletes a task.
exports.delete = function(req,res) {
  console.log('Recieved Delete Request');
  console.log(req.params);
  Task.remove({
    _id: req.params.taskId
  }, function(err, task){
    if (err) { res.send(err); }
    else { res.json({ message: 'Task successfully deleted' } ); }
  });
}
