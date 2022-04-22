const db = require("../../data/dbConfig");

async function findTasks() {
  let tasks = await db("tasks")
    .join("projects", "projects.project_id", "tasks.project_id")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    );
  return tasks;
}

async function findById(id) {
  const rows = await db("tasks")
    .select("task_id", "task_description", "task_notes", "task_completed")
    .where("task_id", id)
    .first();
  return rows;
}

function addTask(task) {
  return db("tasks")
    .insert({ ...task })
    .then(([task_id]) => {
      return findById(task_id);
    });
}

module.exports = {
  findTasks,
  addTask,
};
