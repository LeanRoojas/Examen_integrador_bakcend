const Joi = require('joi');

const bookSchema = Joi.object({
  title: Joi.string().pattern(new RegExp(/^[A-Za-z0-9\s:]+$/)).required(),
  genre: Joi.string().pattern(new RegExp(/^[A-Za-z\s]+$/)).required(),
  author: Joi.string().pattern(new RegExp(/^[A-Za-z\s]+$/)).required(),
  read: Joi.boolean().required(),
});
module.exports = bookSchema;
