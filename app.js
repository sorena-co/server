const express = require('express');
const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
app.use(cors());
app.use(jwt());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', indexRoute);
app.use('/user', userRoute);

module.exports = app;
