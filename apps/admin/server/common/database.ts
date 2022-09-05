import { createPool } from 'mysql2/promise';
import fs from 'fs';

// Create the connection pool. The pool-specific settings are the defaults
const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'encoredb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: { rejectUnauthorized: true },
});

export default pool;
