const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));
app.use(helmet());

app.use('/api',routes);


module.exports = app;