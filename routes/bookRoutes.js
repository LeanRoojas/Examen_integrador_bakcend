/* eslint-disable new-cap */
const express = require('express');
const controller = require('../controllers/controllers');

const routes = (Book) => {
  const bookRouter = express.Router();

  const {getObj, postObj, getBookById, deleteBook, putBook} = controller(Book);

  bookRouter.route('/books')
      .get(getObj)
      .post(postObj);

  bookRouter.route('/books/:bookId')
      .get(getBookById)
      .put(putBook)
      .delete(deleteBook);

  return bookRouter;
};

module.exports = routes;
