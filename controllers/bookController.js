const Book = require('../models/bookModel');

const getAllBooks = async (request, h) => {
  try {
    const books = await Book.findAll();
    return h.response(books).code(200);
  } catch (error) {
    console.error(error);
    return h.response('Error occurred while fetching books').code(500);
  }
};

const getBookById = async (request, h) => {
  const { id } = request.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return h.response(`Book with id '${id}' not found`).code(404);
    }
    return h.response(book).code(200);
  } catch (error) {
    console.error(error);
    return h.response('Error occurred while fetching book').code(500);
  }
};

const createBook = async (request, h) => {
  const book = request.payload;
  try {
    const createdBook = await Book.create(book);
    return h.response(createdBook).code(201);
  } catch (error) {
    console.error(error);
    return h.response('Error occurred while creating book').code(500);
  }
};

const updateBook = async (request, h) => {
  const { id } = request.params;
  const book = request.payload;
  try {
    const updatedBook = await Book.update(id, book);
    if (!updatedBook) {
      return h.response(`Book with id '${id}' not found`).code(404);
    }
    return h.response(updatedBook).code(200);
  } catch (error) {
    console.error(error);
    return h.response('Error occurred while updating book').code(500);
  }
};

const deleteBook = async (request, h) => {
  const { id } = request.params;
  try {
    const deletedBook = await Book.delete(id);
    if (!deletedBook) {
      return h.response(`Book with id '${id}' not found`).code(404);
    }
    return h.response(deletedBook).code(200);
  } catch (error) {
    console.error(error);
    return h.response('Error occurred while deleting book').code(500);
  } 
};

const deleteAllBooks = async (request, h) => {
  try {
    await Book.deleteAll();
    return h.response('All books have been deleted').code(200);
  } catch (error) {
    console.error(error);
    return h.response('Error occurred while deleting books').code(500);
  }
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook, deleteAllBooks };
