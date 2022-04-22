// build your `/api/resources` router here
const express = require("express");
const Resources = require("./model");

const router = express.Router();

router.post("/", (req, res, next) => {
  const resource = req.body;

  Resources.addResource(resource)
    .then((resource) => {
      let { resource_name } = resource;
      res.status(201).json(resource_name);
    })
    .catch(next);
});
// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

router.get("/", (req, res, next) => {
  Resources.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});
// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]

module.exports = router;