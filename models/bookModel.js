const pool = require('../config/database');

class Book {
  static async findAll() {
    const { rows } = await pool.query('SELECT * FROM books');
    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    return rows[0];
  }

  static async create(book) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *',
      [book.title, book.author]
    );
    return rows[0];
  }

  static async update(id, book) {
    const { rows } = await pool.query(
      'UPDATE books SET title = $1, author = $2 WHERE id = $3 RETURNING *',
      [book.title, book.author, id]
    );
    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  }
  static async deleteAll() {
    const { rows } = await pool.query('DELETE FROM books RETURNING *');
    return rows;
  }
}

module.exports = Book;
