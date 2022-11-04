import { createPool } from 'mysql';

export const pool = createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'digibank_sql',
});
