const db = require("../../data/dbConfig");

function find() {
  // `[{
  // "resource_id": 1,
  // "resource_name": "foo",
  // "resource_description": null
  // }]
  return db("resources").select(
    "resource_name",
    "resource_id",
    "resource_description"
  );
}

// function findResources(project_id) {
//   return db("project_resources")
//      .where("project_id", project_id)
//      .select("resource_name", "resource_id", "resource_description");
// }

function addResource(resource) {
  return db("resources")
    .insert({ ...resource })
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
