// build your `Task` model here
const db = require("../../data/dbConfig");

//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
async function findTasks() {
  //   - Each task must include `project_name` and `project_description`
  return (
    db("tasks")
      //   - Example of response body:
      .join("projects", "projects.project_id", "tasks.project_id")
      .select(
        "tasks.task_id",
        "tasks.task_description",
        "tasks.task_notes",
        "tasks.task_completed",
        "projects.project_name",
        "projects.project_description"
      )
      // .where({ "project.project_id": project_id })
  );
  // [{
  // "task_id": 1,
  // "task_description": "baz",
  // "task_notes": null,
  // "task_completed": false,
  // "project_name:"bar",
  // "project_description": null
  // }]
}

function addTask(task) {
  return db("tasks")
    .insert({ ...task })
    .then(() => {
      return db("tasks")
        .join("projects", "projects.project_id", "tasks.project_id")
        .select(
          "tasks.task_id",
          "tasks.task_description",
          "tasks.task_notes",
          "tasks.task_completed",
          "projects.project_completed"
        )
        // .where("projects.project_id", project_id);
    });
}
// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client

//   - Example of response body: `
// {
// "task_id": 1,
// "task_description": "baz",
// "task_notes": null,
// "task_completed": false,
// "project_id:1
// }`

module.exports = {
  findTasks,
  addTask,
};
