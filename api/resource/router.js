const express = require("express");
const Resources = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Resources.findAllResources()
    .then((resources) => {
      res.status(201).json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const resource = req.body;

  Resources.addResource(resource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;
