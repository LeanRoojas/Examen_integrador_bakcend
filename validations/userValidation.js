/* eslint-disable max-len */
const Joi = require('joi');

const userSchema = Joi.object({
  firsName: Joi.string().pattern(new RegExp(/^[a-zA-Z\s]+$/)).required(),
  lastName: Joi.string().pattern(new RegExp(/^[a-zA-Z\s]+$/)).required(),
  userName: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9\s]+$/)).required(),
  password: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9]+$/)).min(8).required(),
  email: Joi.string().pattern(new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)).required(),
  address: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9\s]+$/)).max(30).required(),
  phone: Joi.string().pattern(new RegExp(/^[0-9-]+$/)).required(),
});
module.exports = userSchema;
