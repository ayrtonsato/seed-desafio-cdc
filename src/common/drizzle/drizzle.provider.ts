import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { env } from '@common/config/env';
import * as schema from '@common/drizzle/schema';

export const DrizzleAsyncProvider = 'drizzleProvider';

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: async () => {
      const sqlite = new Database(env.SQL_URL);
      const db = drizzle(sqlite, { schema });
      return db;
    },
    exports: [DrizzleAsyncProvider],
  },
];
