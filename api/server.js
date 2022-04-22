// build your server here and require it from index.js

const express = require("express");
const helmet = require("helmet");
// require routers here
const ProjectRouter = require('./project/router');

const server = express();

server.use(helmet());
server.use(express.json());
// server.use( API , ROUTER)
server.use('/api/projects', ProjectRouter)

server.use((err, req, res, next) => {// eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
