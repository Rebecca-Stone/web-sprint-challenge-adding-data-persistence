const express = require("express");
const Tasks = require("./model");

const router = express.Router();

// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
router.post("/", (req, res, next) => {
  const task = req.body;
  //   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`
  Tasks.addTask(task)
    .then((allSteps) => {
      res.status(201).json(allSteps);
    })
    .catch(next);
});

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
router.get("/", (req, res, next) => {
  //   - Each task must include `project_name` and `project_description`

  //   - Example of response body:
  // [{
  // "task_id": 1,
  // "task_description": "baz",
  // "task_notes": null,
  // "task_completed": false,
  // "project_name:"bar",
  // "project_description": null
  // }]

  Tasks.findTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

module.exports = router;
