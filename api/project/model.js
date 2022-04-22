const db = require("../../data/dbConfig");

async function getAllProjects() {
  let results = await db("projects").select(
    "project_id",
    "project_name",
    "project_description",
    "project_completed"
  );
  return results;
}

async function findById(project_id) {
  let project = await db("projects")
    .where("project_id", project_id)
    .select(
      "project_id",
      "project_name",
      "project_description",
      "project_completed"
    )
    .first();
  return project;
}

function addProjects(project) {
  return db("projects")
    .insert(project)
    .then(([project_id]) => {
      return findById(project_id);
    });
}

module.exports = {
  getAllProjects,
  addProjects,
};
