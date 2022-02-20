const bookControllers = (Book) => {
  const getObj = async (req, res) => {
    const {query} = req;
    const response = await Book.find(query);
    res.json(response);
  };

  const postObj = async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
  };

  const getBookById = async (req, res) => {
    const response = await Book.findById(req.params.bookId);
    res.json(response);
  };

  const putBook = async (req, res) => {
    const {body} = req;
    const response = await Book.findByIdAndUpdate(
        {_id: req.params.bookId},
        {
          $set: {
            title: body.title,
            genre: body.genre,
            author: body.author,
            read: body.read,
          },
        },
    );
    res.json(response);
  };

  const deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.bookId);
    res.json('Book has been deleted successfully...');
  };

  return {getBookById, putBook, deleteBook, getObj, postObj};
};

module.exports = bookControllers;
