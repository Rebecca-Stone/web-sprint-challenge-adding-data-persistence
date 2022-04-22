// build your `/api/tasks` router here
const express = require("express");
const Tasks = require("./model");
// const Projects = require("../project/model");

const router = express.Router();

router.post("/", (req, res, next) => {
  const task = req.body;
  // const { project_id } = req.params;

  Tasks.addTask(task)
    .then((allSteps) => {
      res.status(201).json(allSteps);
    })
    .catch(next);
});
// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client

//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

router.get("/", (req, res, next) => {
  // const { project_id } = req.params;

  Tasks.findTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});
// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client

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

module.exports = router;
