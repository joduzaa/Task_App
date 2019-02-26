var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    title: String,
    description: String,
    complete: {type: Boolean, default: false},
    end_date: {type: Date, default: Date.now}
  });

module.exports = mongoose.model('Task', TaskSchema, 'task');
