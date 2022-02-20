/* eslint-disable new-cap */
const express = require('express');
const bookControllers = require('../controllers/bookControllers');
const bookSchema = require('../validations/bookValidation');
const validator = require('express-joi-validation').createValidator();

const routes = (Book) => {
  const bookRouter = express.Router();

  // eslint-disable-next-line max-len
  const {getObj, postObj, getBookById, deleteBook, putBook} = bookControllers(Book);

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
