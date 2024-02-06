import { Inject, Injectable } from '@nestjs/common';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { DrizzleAsyncProvider } from '@common/drizzle/drizzle.provider';
import * as schema from '@common/drizzle/schema';
import { CreateAuthor } from './dtos/create-author.dto';
import { AuthorEntity } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db: BetterSQLite3Database<typeof schema>,
  ) { }

  async create(createAuthor: CreateAuthor) {
    const author = await this.db
      .insert(schema.authors)
      .values({
        name: createAuthor.name,
        email: createAuthor.email,
        description: createAuthor.description,
      })
      .returning();
    if (author.length < 0) {
      throw new Error('Error when inserting a new author');
    }
    return new AuthorEntity(author[0]);
  }
}
