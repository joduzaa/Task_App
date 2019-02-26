module.exports = function(app) {

	var task = require('../controllers/task.controller.js');

	// Create a new task
	app.post('/task', task.create);

	// Retrieve all task
	app.get('/task', task.findAll);

	// Retrieve one task
	app.get('/task/show/:taskID', task.findOne);

	// Delete one task
	app.delete('/task/:taskID', task.deleteByID);

	// Update one task
	app.put('/task/:taskID', task.updateByID);

	// Complete one task
	app.put('/task/complete/:taskID', task.completeByID);

	// Filter tasks - Completed
	app.get('/task/complete', task.findComplete);

	// Filter tasks - Un-Completed
	app.get('/task/uncomplete', task.findUnComplete);

	// Filter tasks - Overdue
	app.get('/task/overdue', task.findOverdue);

	// Filter tasks - Deadline
	app.get('/task/:taskDate', task.findDeadline);

}