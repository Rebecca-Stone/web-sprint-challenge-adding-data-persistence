// build your `Resource` model here
const db = require("../../data/dbConfig");

function find() {
  return db("resources").select(
    "resource_name",

    "resource_id",
    //   "resource_name",
    "resource_description"
  );
  // `[{
  // "resource_id": 1,
  // "resource_name": "foo",
  // "resource_description": null
  // }]
}

async function findById(resource_id) {
  let results = await db("resources").where("resource_id", resource_id).select(
    "resource_name",
    "resource_id",
    //   "resource_name",
    "resource_description"
  );
  // {
  // "resource_id": 1,
  // "resource_name": "foo",
  // "resource_description": null
  // }
  return results;
}

function add(resource) {
  return db("resources")
    .insert(resource)
    .then(([resource_id]) => {
      return findById(resource_id);
    });
}

module.exports = {
  find,
  findById,
  add,
};
