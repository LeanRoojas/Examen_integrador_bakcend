const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const Book = require('./models/bookModels');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/bookRoutes')(Book);
const userRouter = require('./routes/userRoutes')(User);
const app = express();
const jwt = require('express-jwt');

mongoose.connect('mongodb://127.0.0.1:27017/usersAPI');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.all('/*', jwt({
  secret: 'ultraSecreto',
  algorithms: ['HS256'],
}).unless({
  path: ['/users/login'],
}));
app.use('/', userRouter, bookRouter);
app.listen(8080);
