/* eslint-disable new-cap */
const express = require('express');
const controller = require('../controllers/controllers');
const userSchema = require('../validations/userValidation');
const validator = require('express-joi-validation').createValidator();

const routes = (User) => {
  const userRouter = express.Router();

  // eslint-disable-next-line max-len
  const {getObj, postObj, getById, putUser, deleteObj, postLogin, validateToken} = controller(User);

  userRouter.route('/users')
      .get(getObj)
      .post(validator.body(userSchema), postObj);

  userRouter.route('/users/:userId')
      .get(getById)
      .put(validator.body(userSchema), putUser)
      .delete(deleteObj);

  userRouter.route('/users/login')
      .post(postLogin);

  userRouter.route('/login/validate')
      .get(validateToken);
  return userRouter;
};

module.exports = routes;
