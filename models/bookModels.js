const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookModel = new Schema(
    {
      title: {type: String},
      genre: {type: String},
      author: {type: String},
      read: {type: Boolean},

    },
);

module.exports = mongoose.model('Book', bookModel);
