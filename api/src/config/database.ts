import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:mJZTgQVyNBgzinNiddnMVuJMhfVyyxdn@junction.proxy.rlwy.net:20627/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;