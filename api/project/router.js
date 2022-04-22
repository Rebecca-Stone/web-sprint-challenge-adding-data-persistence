// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");
// const { validateProject } = require('./middleware');

const router = express.Router();

router.post(
  "/",
  // validateProject,
  (req, res, next) => {
    const project = req.body;

    Projects.add(project)
      .then((project) => {
        res.status(201).json(project);
      })
      .catch(next);
  }
);
// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((projects) => {
      // if (projects.project_completed == 0) {
        // projects.project_completed = false;
      // } else {
        // projects.project_completed = true;
      // }
      res.status(201).json(projects);
    })
    .catch(next);
});
// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client

//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

module.exports = router;
