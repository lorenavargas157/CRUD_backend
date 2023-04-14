const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CRD',
  password: 'Lorenav18',
  port: 5432,
});

module.exports = pool;
