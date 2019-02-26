var Task = require('../models/task.model.js');
var mongoose = require('mongoose');


// Add a task
exports.create = function(req, res) {
    if(!req.body) {
        res.status(400).send({message: "Task cannot be empty"});
    }else {
    var task = new Task({title: req.body.title || "Untitled Task", description: req.body.description, end_date: req.body.end_date});
    task.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving data!"});
        } else {
          res.json(data);
        }
    });
  }
};


// Find all tasks
exports.findAll = function(req, res) {
  Task.find(function(err, tasks){
      if(err) {
          console.log(err);
          res.status(500).send({message: "Some error occurred while retrieving data!"});
      } else {
         res.send(tasks);
      }
  });
};


// Retrieve one task
exports.findOne = function(req, res) {
    Task.find({ _id: req.params.taskID }, function(err, task){
        if(err) {
          console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving task."});
        } else {
          res.send(task);
        }
    });
}


// Delete one task by id
exports.deleteByID = function(req, res){
  Task.findByIdAndRemove(req.params.taskID, function(err) {
    if (err) return handleError(err);
    res.send("Task removed");
  });
}


// Update one task by id
exports.updateByID = function(req, res){
  Task.findByIdAndUpdate(req.params.taskID, { $set: req.body } , function(err){
    if(err){
        console.log("Some error occurred while updating data!");
    }
      res.send("Task updated");
  });
}


// Change task to complete
exports.completeByID = function(req, res){
  Task.findByIdAndUpdate(req.params.taskID, { $set: { complete: true }}, function(err){
    if(err){
        console.log("Some error occurred while updating data!");
    }
      res.send("Task completed");
  });
}


// Find completed tasks
exports.findComplete = function(req, res) {
    Task.find({ complete: true }, function(err, tasks){
        if(err) {
          console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving tasks."});
        } else {
          res.send(tasks);
        }
    });
}


// Find uncompleted taskd
exports.findUnComplete = function(req, res) {
    Task.find({ complete: false }, function(err, tasks){
        if(err) {
          console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving tasks."});
        } else {
          res.send(tasks);
        }
    });
}


// Find task by deadline
exports.findDeadline = function(req, res) {
    Task.find({ end_date: req.params.taskDate }, function(err, tasks){
        if(err) {
          console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving tasks."});
        } else {
          res.send(tasks);
        }
    });
}


// Find overdue tasks
exports.findOverdue = function(req, res) {
    Task.find({ complete: false, end_date: { $lte: new Date()}}, function(err, tasks){
        if(err) {
          console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving tasks."});
        } else {
          res.send(tasks);
        }
    });
}