const db = require("../../data/dbConfig");

async function findAllResources() {
  let resource = await db("resources");
  return resource;
}

async function findResource(resource_id) {
  let newResource = await db("resources")
    .where("resource_id", resource_id)
    .first();
  return newResource;
}

async function addResource(resource) {
  if (resource.resource_name) {
    return await db("resources")
      .insert(resource)
      .then(([resource_id]) => {
        return findResource(resource_id);
      });
  }
}

module.exports = {
  findAllResources,
  addResource,
};
