// build your `Project` model here
const db = require('../../data/dbConfig');

function getProjects() {
    return db('projects')
}

function add(project) {
    return db('projects')
        .insert(project)
        .then(([project_id]) => {
        // return findById(project_id)
            return project_id
    })
}

module.exports = {
    getProjects,
    add
}