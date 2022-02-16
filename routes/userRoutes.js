/* eslint-disable new-cap */
const express = require('express');
const controller = require('../controllers/controllers');
const Joi = require('joi');
const validtor = require('express-joi-validation').createValidator();

const bodySchema = Joi.object({
  firsName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().min(8).required(),
});


const routes = (User) => {
  const userRouter = express.Router();

  // eslint-disable-next-line max-len
  const {getObj, postObj, getById, putUser, deleteObj, postLogin, validateToken} = controller(User);

  userRouter.route('/users')
      .get(getObj)
      .post(postObj);

  userRouter.route('/users/:userId')
      .get(getById)
      .put(putUser)
      .delete(deleteObj);

  userRouter.route('/users/login')
      .post(postLogin);

  userRouter.route('/login/validate')
      .get(validateToken);
  return userRouter;
};

module.exports = routes;
