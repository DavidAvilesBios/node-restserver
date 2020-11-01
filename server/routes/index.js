const express = require('express');
const app = express();

app.use(require('./prospecto'));

module.exports = app;