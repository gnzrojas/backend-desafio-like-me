import 'dotenv-flow/config';
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'likeme',
    password: process.env.DB_PASSWORD,
    allowExitOnIdle: true
});