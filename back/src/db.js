import { createPool } from 'mysql';

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'digibank_sql',
});
