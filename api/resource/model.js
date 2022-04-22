// build your `Resource` model here
const db = require("../../data/dbConfig");

function find() {
  return db("resources").select(
    "resource_name",
    "resource_id",
    "resource_description"
  );
  // `[{
  // "resource_id": 1,
  // "resource_name": "foo",
  // "resource_description": null
  // }]
}

// function findResources(project_id) {
//   return db("project_resources").where("project_id", project_id).select(
//     "resource_name",
//     "resource_id",
//     "resource_description"
//   );
  // {
  // "resource_id": 1,
  // "resource_name": "foo",
  // "resource_description": null
  // }
// }

function addResource(resource) {
  return db("resources")
    .insert({...resource})
    .then(() => {
      return db("resources").select(
        "resource_name",
        "resource_id",
        "resource_description"
      );
    });
}

module.exports = {
  find,
  // findResources,
  addResource,
};
