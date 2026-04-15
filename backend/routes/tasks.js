const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');
const CompletedTask = require('../models/CompletedTask');
const User = require('../models/User');

// @route   GET api/tasks
// @desc    Get all tasks minus completed
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const allTasks = await Task.find();
    const completed = await CompletedTask.find({ userId: req.user.id });
    const completedIds = completed.map(c => c.taskId.toString());
    
    // add a flag if task is completed
    const tasksWithStatus = allTasks.map(task => {
      return {
        ...task._doc,
        isCompleted: completedIds.includes(task.id)
      }
    });

    res.json(tasksWithStatus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/tasks/complete
// @desc    Complete a task
// @access  Private
router.post('/complete', auth, async (req, res) => {
  const { taskId } = req.body;
  try {
    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    let alreadyCompleted = await CompletedTask.findOne({ userId: req.user.id, taskId });
    if (alreadyCompleted) {
      return res.status(400).json({ msg: 'Task already completed' });
    }

    const completedTask = new CompletedTask({
      userId: req.user.id,
      taskId
    });

    await completedTask.save();

    // Add points to user
    const user = await User.findById(req.user.id);
    user.points += task.points;
    await user.save();

    res.json({ msg: 'Task completed!', userPoints: user.points, task });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// seed tasks
router.post('/seed', async (req, res) => {
  try {
    await Task.deleteMany({});
    const initialTasks = [
      { title: 'Plant a Tree', description: 'Plant a tree in your neighborhood.', points: 50 },
      { title: 'Use Reusable Bag', description: 'Go grocery shopping with reusable bags.', points: 10 },
      { title: 'Bike to Work/School', description: 'Use a bicycle instead of a car.', points: 30 },
      { title: 'Recycle Plastic', description: 'Sort and recycle your plastic waste.', points: 15 },
      { title: 'Meatless Monday', description: 'Eat only plant-based meals for a day.', points: 20 },
    ];
    await Task.insertMany(initialTasks);
    res.json({ msg: 'Tasks seeded successfully!' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
