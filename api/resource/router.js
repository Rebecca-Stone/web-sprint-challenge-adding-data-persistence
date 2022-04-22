const express = require("express");
const Resources = require("./model");

const router = express.Router();

// - [ ] `[POST] /api/resources`
router.post("/", (req, res, next) => {
  const resource = req.body;

  Resources.addResource(resource)
    .then((resource) => {
      //   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`
      let { resource_name } = resource;
      res.status(201).json(resource_name);
    })
    .catch(next);
});

// - [ ] `[GET] /api/resources`
router.get("/", (req, res, next) => {
  //   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]
  Resources.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

module.exports = router;
