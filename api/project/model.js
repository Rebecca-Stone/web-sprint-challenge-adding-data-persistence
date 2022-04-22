// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects() {
  let results = await db("projects").select(
    "project_id",
    "project_name",
    "project_description",
    "project_completed"
  );
  return results
}

async function findById(project_id) {
  let results = await db("projects")
    .where("project_id", project_id)
    .select(
      "project_id",
      "project_name",
      "project_description",
      "project_completed"
    );
  if (results.length == 0) {
    return null;
  }
  let completed = false;
  if (results[0].project_completed == 1) {
    completed = true;
  } else if (results[0].project_completed == 0) {
    completed = false;
  }
  const project = {
    project_id: results[0].project_id,
    project_name: results[0].project_name,
    project_description: results[0].project_description,
    project_completed: completed,
  };
  return project;
}

function add(project) {
  return db("projects")
    .insert(project)
    .then(([project_id]) => {
      return findById(project_id);
    });
}

module.exports = {
  getProjects,
  add,
};
