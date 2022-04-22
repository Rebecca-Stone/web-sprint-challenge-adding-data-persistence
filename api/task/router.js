const express = require("express");
const Tasks = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Tasks.findTasks()
    .then((tasks) => {
      res.json(
        tasks.map((task) => {
          return { ...task, task_completed: !!task.task_completed };
        })
      );
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const task = req.body;
  Tasks.addTask(task)
    .then((task) => {
      res.status(201).json({ ...task, task_completed: !!task.task_completed });
    })
    .catch(next);
});

module.exports = router;
