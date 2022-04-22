// // const db = require("../../data/dbConfig");

// // async function checkProjectId(req, res, next) {
// //   let project = await db("projects")
// //     .where({ project_id: req.params.project_id })
// //     .first();
// //   if (!project) {
// //     next({
// //       message: `project with project_id ${req.params.project_id} not found`,
// //       status: 404,
// //     });
// //   } else {
// //     next();
// //   }
// // }

// const validateProject = (req, res, next) => {
//   let { project_name } = req.body;
//   if (
//     !project_name ||
//     typeof project_name != "string" ||
//     !project_name.trim()
//   ) {
//     next({ message: "invalid project_name", status: 400 });
//   } else {
//     next();
//   }
// };

// module.exports = {
// //   checkProjectId,
//   validateProject,
// };
