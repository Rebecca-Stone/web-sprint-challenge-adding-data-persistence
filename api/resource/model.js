// build your `Resource` model here
const db = require('../../data/dbConfig');

function find() {
    return db('resources as re')
    .select('resource_id', 'resource_name', 'resource_description')
    // `[{
    // "resource_id": 1, 
    // "resource_name": "foo", 
    // "resource_description": null
// }]
}

module.exports = {
    find,
}