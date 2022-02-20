/* eslint-disable new-cap */
const express = require('express');
const controller = require('../controllers/userControllers');
const userSchema = require('../validations/userValidation');
const validator = require('express-joi-validation').createValidator();

const routes = (User) => {
  const userRouter = express.Router();

  // eslint-disable-next-line max-len
  const {getObj, postObj, getById, putUser, deleteObj, postLogin} = controller(User);

  userRouter.route('/users')
      .get(getObj)
      .post(validator.body(userSchema), postObj);

  userRouter.route('/users/:userId')
      .get(getById)
      .put(validator.body(userSchema), putUser)
      .delete(deleteObj);

  userRouter.route('/users/login')
      .post(postLogin);

  return userRouter;
};

module.exports = routes;
