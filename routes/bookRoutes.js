/* eslint-disable new-cap */
const express = require('express');
const controller = require('../controllers/controllers');
const bookSchema = require('../validations/bookValidation');
const validator = require('express-joi-validation').createValidator();

const routes = (Book) => {
  const bookRouter = express.Router();

  const {getObj, postObj, getBookById, deleteBook, putBook} = controller(Book);

  bookRouter.route('/books')
      .get(getObj)
      .post(validator.body(bookSchema), postObj);

  bookRouter.route('/books/:bookId')
      .get(getBookById)
      .put(validator.body(bookSchema), putBook)
      .delete(deleteBook);

  return bookRouter;
};

module.exports = routes;
