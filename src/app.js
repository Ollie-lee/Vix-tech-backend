require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
require('express-async-errors');
const v1Router = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/v1', v1Router);

module.exports = app;
