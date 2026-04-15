const mongoose = require('mongoose');

const CompletedTaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CompletedTask', CompletedTaskSchema);
