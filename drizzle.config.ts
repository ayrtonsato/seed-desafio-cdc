import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default {
    schema: './src/common/drizzle/schema.ts',
    out: './drizzle',
    driver: 'better-sqlite',
    dbCredentials: {
        url: process.env.SQL_URL,
    }
} satisfies Config;