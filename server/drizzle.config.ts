
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const db_url = process.env.DATABASE_URL;

export default defineConfig({
  out: './drizzle',
  schema: './src/lib/schemas/*.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: db_url,
  },
});