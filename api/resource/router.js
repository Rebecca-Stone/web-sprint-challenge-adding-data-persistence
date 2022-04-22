// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

router.get('/', (req, res, next) => {
    Resources.find()
        .then(resources => {
        res.json(resources)
        })
    .catch(next)
})
// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]