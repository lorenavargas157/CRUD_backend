const Joi = require('@hapi/joi');
const BookController = require('../controllers/bookController');

const bookRoutes = [
  {
    method: 'GET',
    path: '/books',
    handler: BookController.getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: BookController.getBookById,
    options: {
      validate: {
        params: Joi.object({
          id: Joi.number().integer().required(),
        }),
      },
    },
  },
  {
    method: 'POST',
    path: '/books',
    handler: BookController.createBook,
    options: {
      validate: {
        payload: Joi.object({
          title: Joi.string().required(),
          author: Joi.string().required(),
        }),
      },
    },
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: BookController.updateBook,
    options: {
      validate: {
        params: Joi.object({
          id: Joi.number().integer().required(),
        }),
        payload: Joi.object({
          title: Joi.string().required(),
          author: Joi.string().required(),
        }),
      },
    },
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: BookController.deleteBook,
    options: {
      validate: {
        params: Joi.object({
          id: Joi.number().integer().required(),
        }),
      },
    },
  },
  {
    method: 'DELETE',
    path: '/books',
    handler: BookController.deleteAllBooks,
  },
];

module.exports = bookRoutes;
