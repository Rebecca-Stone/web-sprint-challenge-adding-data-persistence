const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.getAllProjects()
    .then((projects) => {
      res.status(201).json(
        projects.map((project) => {
          return {
            ...project,
            project_completed: !!project.project_completed,
          };
        })
      );
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const project = req.body;
  Projects.addProjects(project)
    .then((project) => {
      res
        .status(201)
        .json({ ...project, project_completed: !!project.project_completed });
    })
    .catch(next);
});

module.exports = router;
