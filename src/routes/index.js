const express = require('express');
const userRouter = require('./users');

const v1Router = express.Router();

v1Router.use('/users', userRouter);

module.exports = v1Router;
